const { db } = require('../../db')
db.sequelize.sync()
const Booking = db.Booking

module.exports = async(info) => {
    const { date, schedule, duration } = info
    if(!date || !schedule || !duration) throw new Error('Missing data')
    const newBooking = await Booking.create(info)
    return newBooking;
}