const mercadopago = require('mercadopago');


module.exports = async(req, res) => {
    mercadopago.configure({
        access_token: 'TEST-872443940722018-072322-5276e0527cfd7c712ab71c09327023e0-1431922934'
    });
    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Reserva cancha',
                unit_price: 15000,
                currency_id: 'COP',
                quantity: 1
            },
            {
                title: 'Reserva cancha',
                unit_price: 15000,
                currency_id: 'COP',
                quantity: 1
            }
        ],
        back_urls: {
            failure: 'https://localhost:3000/api/failure',
            pending: 'https://localhost:3000/api/pending',
            success: 'https://localhost:3000/api/success'
        },
        notification_url: 'https://f50b-179-1-48-61.ngrok.io/api/webHookPay'
    })
    console.log(result);
    return result
}