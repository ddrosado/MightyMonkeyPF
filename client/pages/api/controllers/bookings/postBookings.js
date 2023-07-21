const { db } = require('../../db')
db.sequelize.sync()
const Booking = db.Booking

module.exports = async(info) => {
    const { date, shedule, duration } = info
    if(!date || !shedule || ! duration) throw new Error('Missing data')
    const newBooking = await Booking.create(info)
    return newBooking;
}