const payment = require('../controllers/payment/payment')

export default async(req, res) => {
    try {
        console.log(req.body);
        console.log(req.query);
        const pay = await payment(req.body, req.query.type)
        res.status(200).json(pay.body)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}