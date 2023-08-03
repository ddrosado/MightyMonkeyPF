const payment = require('../controllers/payment/payment')

export default async(req, res) => {
    try {
        const pay = await payment(req.body)
        res.status(200).json(pay.body)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}