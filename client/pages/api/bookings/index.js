const getBookings = require('../controllers/bookings/getBookings')
const postBookings = require('../controllers/bookings/postBookings')

export default async(req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const allBookings = await getBookings()
                return res.status(200).json(allBookings)
            } catch (error) {
                return res.status(400).json({error: error.message})
            }
        case 'POST':
            try {
                const newBooking = postBookings(req.body)
                return res.status(200).json(newBooking)
            } catch (error) {
                return res.status(400).json({error: error.message})
            }
        default:
            break;
    }
}