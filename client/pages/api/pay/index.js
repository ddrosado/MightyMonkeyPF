const payment = require('../controllers/payment/payment')

export default async(req, res) => {
    const pay = await payment()
    res.status(200).json(pay)
}