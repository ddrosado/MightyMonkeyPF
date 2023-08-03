import mercadopago from "mercadopago";
const postBookings = require('../controllers/bookings/postBookings')

export default async(req, res) => {
    try {
        console.log('QUERY',req.query);
        console.log('BODY',req.body);
        console.log('METHOD',req.method);
        const payment = req.query
        if(payment.type === 'payment') {
            const [ date, hour, userId, courtId ] = (await mercadopago.payment.findById(payment['data.id'])).response.additional_info.items[0].description.split(' ');
            
            const info = { date, hour: hour.split(','), userId, courtId, payment }
            console.log(info);
            const newBooking = await postBookings(info);
            res.status(200).json(newBooking);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}