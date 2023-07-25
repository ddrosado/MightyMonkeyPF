const getBookings = require('../controllers/bookings/getBookings')
const postBookings = require('../controllers/bookings/postBookings')
const putBookings = require('../controllers/bookings/putBookings')
const deleteBookings = require('../controllers/bookings/deleteBookings')

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
                const newBooking = await postBookings(req.body)
                return res.status(200).json(newBooking)
            } catch (error) {
                return res.status(400).json({error: error.message})
            }
        case 'PUT':
            try {
                const bookingUpdated = await putBookings(req.body)
                return res.status(200).json(bookingUpdated)
            } catch (error) {
                return res.status(400).json({error: error.message})
            }
        case 'DELETE':
            try {
                const { id } = req.body
                const bookingDelete = await deleteBookings(id)
                return res.status(200).json(bookingDelete)
            } catch (error) {
                return res.status(400).json({error: error.message})
            }
        default:
            break;
    }
}