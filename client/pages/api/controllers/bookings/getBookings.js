const { db } = require('../../db')
db.sequelize.sync()
const Booking = db.Booking

module.exports = async() => {
    const bookings = await Booking.findAll()
    return bookings;
}