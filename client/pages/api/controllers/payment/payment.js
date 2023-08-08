const mercadopago = require('mercadopago');
const { db } = require('../../db');
const { User, Court, Plan, Booking } = db
const ngrok = 'https://16fa-201-252-85-88.ngrok-free.app'

module.exports = async(data) => {
    mercadopago.configure({
        access_token: 'TEST-8224153938650622-073001-07e9c314a676cfd54e1dca286b6054d2-1436108503'
    });
    switch (data.type) {
        case 'bookings': {
            const { date, hour, userId, courtId } = data

            const user = await User.findOne({ where: { id: userId } })
            const court = await Court.findOne({ where: { id: courtId } })
            
            console.log('aqui estaaaaaa',hour);
            const result = await mercadopago.preferences.create({
                items: [
                    {
                        title: `Reserva cancha (${court.name})`,
                        description: `${date} ${hour} ${userId} ${courtId}`,
                        picture_url: court.image,
                        unit_price: user.isMember ? court.memberPrice*hour.length : court.noMemberPrice*hour.length,
                        currency_id: "ARS",
                        quantity: 1
                    }
                ],
                back_urls: {
                    failure: 'https://localhost:3000/api/failure',
                    pending: 'https://localhost:3000/api/pending',
                    success: 'https://localhost:3000/api/success'
                },
                notification_url: `${ngrok}/api/webHookPay`
            })
            return result
        }
        case 'subscriptions': {
            const { userId, planId } = data
            const plan = await Plan.findOne({ where: { id: planId } })
            const user = await User.findOne({ where: { id: userId } })

            console.log(user);

            const result = await mercadopago.preapproval.create({
                payer_email: user.email, //"test_user_1751930390@testuser.com",
                reason: plan.name,
                auto_recurring: {
                    frequency: plan.duration,
                    frequency_type: 'months',
                    transaction_amount: plan.price,
                    currency_id: 'COP'
                },
                back_url: `${ngrok}/thanks`
            })
            await user.update({memberId: result.body.id, planId})
            return result
        }
        default:
            throw new Error('Invalid url parameters');
    }
}