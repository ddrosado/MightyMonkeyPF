import mercadopago from "mercadopago";
const postBookings = require('../controllers/bookings/postBookings')

export default async(req, res) => {
    try {
        console.log('QUERY',req.query);
        console.log('BODY',req.body);
        console.log('METHOD',req.method);
        const payment = req.query
        if(payment.type === 'payment') {
            const newBookings = [];
            const bookingsItems = (await mercadopago.payment.findById(payment['data.id'])).response.additional_info.items;
            console.log('items ?', bookingsItems);
            bookingsItems.forEach(async(item) => {
                const [ date, schedule, duration, userEmail, courtName ] = item.description.split(' ');
                const info = { date, schedule, duration: Number(duration), userEmail, courtName }
                const newBooking = await postBookings(info)
                newBookings.push(newBooking)
            });
            const bookingsItemslog = (await mercadopago.payment.findById(payment['data.id'])).response;
            console.log(bookingsItemslog);
            res.status(200).json(newBookings);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}