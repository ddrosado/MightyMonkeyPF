const payment = require('../controllers/bookings/payment')

export default async(req, res) => {
    const pay = await payment()
    res.status(200).json(pay)
}