const mercadopago = require('mercadopago');


module.exports = async(data, type) => {
    mercadopago.configure({
        access_token: 'TEST-872443940722018-072322-5276e0527cfd7c712ab71c09327023e0-1431922934'
    });
    console.log('this is type', type);
    switch (type) {
        case 'buys': {
            const { items } = data
            console.log('esto es req',items);
            const result = await mercadopago.preferences.create({
                items: items,
                back_urls: {
                    failure: 'https://localhost:3000/api/failure',
                    pending: 'https://localhost:3000/api/pending',
                    success: 'https://localhost:3000/api/success'
                },
                notification_url: 'https://0a11-179-1-48-61.ngrok.io/api/webHookPay'
            })
            return result
        }
        case 'subscriptions': {
            const { email, reason, price } = data
            const result = await mercadopago.preapproval.create({
                payer_email: email, //"test_user_1751930390@testuser.com",
                reason: reason,
                auto_recurring: {
                    frequency: 1,
                    frequency_type: "months",
                    transaction_amount: price,
                    currency_id: "COP"
                },
                back_url: "https://6457-179-1-48-61.ngrok.io/gracias",
            })
            console.log(result);
            return result
        }
        default:
            throw new Error('Invalid url parameters');
    }
}
