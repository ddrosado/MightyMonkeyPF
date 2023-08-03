const mercadopago = require('mercadopago');
const { db } = require('../../db');
const Plan = require('../../../../models/Plan');
const { User, Court, Booking } = db
const ngrok = 'https://1d38-179-1-48-61.ngrok-free.app'

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

            const result = await mercadopago.preapproval.create({
                payer_email: user.email, //"test_user_1751930390@testuser.com",
                reason: plan.name,
                auto_recurring: {
                    frequency: plan.duration,
                    frequency_type: 'months',
                    transaction_amount: plan.price,
                    currency_id: "COP"
                },
                back_url: `${ngrok}/thanksForSubscript`
            })
            return result
        }
        default:
            throw new Error('Invalid url parameters');
    }
}

// mercadopago.js
// const mercadopago = require('mercadopago');

// mercadopago.configure({
//   access_token: 'TEST-872443940722018-072322-5276e0527cfd7c712ab71c09327023e0-1431922934'
// });

// module.exports = async (req, res) => {
//   try {
//     const result = await mercadopago.preferences.create({
//       items: [
//         {
//           title: 'Reserva cancha',
//           unit_price: 1,
//           currency_id: 'COP',
//           quantity: 1
//         },
//         {
//           title: 'Reserva cancha',
//           unit_price: 1,
//           currency_id: 'COP',
//           quantity: 1
//         }
//       ],
//       back_urls: {
//         failure: 'https://localhost:3000/api/failure',
//         pending: 'https://localhost:3000/api/pending',
//         success: 'https://localhost:3000/api/success'
//       },
//       notification_url: 'https://0fc3-179-1-48-61.ngrok.io/api/webHookPay',
//       payer: {
//         email: 'test_user_1751930390@testuser.com', // Reemplaza esto con el correo del pagador
//       },
//       auto_return: 'approved', // Redireccionar automáticamente al pagador cuando el pago esté aprobado
//       payment_methods: {
//         excluded_payment_types: [
//           { id: 'atm' }, // Excluir pagos en efectivo (ATM) de la preferencia
//         ],
//         // excluded_payment_methods: [
//         //   { id: 'amex' }, // Excluir tarjetas American Express de la preferencia
//         // ],
//         installments: 6, // Número máximo de cuotas permitidas
//         default_installments: 2, // Cuotas predeterminadas (1 para no permitir cuotas)
//       },
//     preapproval: {
//         // Configuración de la preaprobación
//         collector_id: 'TEST-7260b301-2ac2-428f-9e0b-3e93e96896ab', // Reemplaza esto con el ID del cobrador (vendedor)
//         external_reference: '', // Reemplaza esto con tu referencia externa
//         reason: 'Pago de Suscripción', // Motivo de la preaprobación
//         back_url: 'https://localhost:3000/suscripcion/confirmacion', // URL de retorno después de la aprobación
//         auto_recurring: {
//           frequency: 1, // Frecuencia de la recurrencia (1 para cada mes)
//           frequency_type: 'months', // Tipo de frecuencia (puede ser 'months' o 'days')
//           transaction_amount: 15000, // Monto de la suscripción
//           currency_id: 'COP', // Moneda de la suscripción
//         },
//       },
//     });

//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error('Error al crear preferencia de MercadoPago:', error);
//     throw error;
//   }
// };

