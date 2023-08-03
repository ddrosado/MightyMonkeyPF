const mercadopago = require('mercadopago');

module.exports = async(data) => {
    mercadopago.configure({
        access_token: 'TEST-8224153938650622-073001-07e9c314a676cfd54e1dca286b6054d2-1436108503'
    });
    switch (data.type) {
        case 'booking': {
            const { items } = data
            const result = await mercadopago.preferences.create({
                items: items,
                back_urls: {
                    failure: 'https://localhost:3000/api/failure',
                    pending: 'https://localhost:3000/api/pending',
                    success: 'https://localhost:3000/api/success'
                },
                notification_url: `/api/webHookPay`
            })
                return result
        }
        case 'subscriptions': {
            const { email, reason, price, frequency, frequency_type } = data
            const result = await mercadopago.preapproval.create({
                payer_email: email, //"test_user_1751930390@testuser.com",
                reason: reason,
                auto_recurring: {
                    frequency: frequency,
                    frequency_type: frequency_type,
                    transaction_amount: price,
                    currency_id: "ARS"
                },
                back_url: `/thanksForSubscript`
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

