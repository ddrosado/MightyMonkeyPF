const mercadopago = require('mercadopago');
const { db } = require('../../db');
const { User, Court, Plan, Booking } = db
// const ngrok = 'https://9e2a-179-1-48-61.ngrok-free.app'

module.exports = async(data) => {
    mercadopago.configure({
        access_token: 'TEST-6957380372612142-072516-7b4678147f1973268448b263801d8060-292528470',
        integrator_id: '292528470',
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
                    failure: '/failure',
                    pending: '/pending',
                    success: '/success'
                },
                notification_url: 'https://mighty-monkey-pf-git-devs-monosfeos.vercel.app/api/webHookPay'
            })
            return result
        }
        case 'subscriptions': {
            console.log('llego al back');
            const { userId, planId } = data
            
            const plan = await Plan.findOne({ where: { id: planId } })
            const user = await User.findOne({ where: { id: userId } })

            console.log(user);

            const result = await mercadopago.preapproval.create({
                payer_email: "jhonatanbolivar14@gmail.com",
                reason: plan.name,
                auto_recurring: {
                    frequency: plan.duration,
                    frequency_type: 'months',
                    transaction_amount: plan.price,
                    currency_id: 'COP'
                },
                back_url: 'https://mighty-monkey-pf-git-devs-monosfeos.vercel.app/thanks'
            })
            await user.update({memberId: result.body.id, planId})
            return result
        }
        default:
            throw new Error('Invalid url parameters data');
    }
}