const payment = require('../controllers/payment/payment')
const cancelSupscription = require('../controllers/payment/cancelSupscription')


export default async(req, res) => {
    try {
        switch (req.method) {
            case 'POST':
                const pay = await payment(req.body);
                console.log("Payment information: ", pay);
                res.status(200).json(pay.body);
            case 'PUT':
                const cancel = await cancelSupscription(req.body)
                res.status(200).json(cancel)
            default:
                break;
        }
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}