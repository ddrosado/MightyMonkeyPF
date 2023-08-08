const mercadopago = require('mercadopago');
const { db } = require('../../db');
const { User, Court, Plan, Booking } = db
const ngrok = 'https://e580-179-1-48-61.ngrok-free.app'

module.exports = async(data) => {
    mercadopago.configure({
        access_token: 'TEST-5280417047762022-072715-6cdc99477060d48978bc1cf779776e2e-1431922934'
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
                        currency_id: 'COP',
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