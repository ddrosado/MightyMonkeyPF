const { db } = require('../../db')
db.sequelize.sync()
const Booking = db.Booking

module.exports = async(info) => {
    const { date, schedule, duration } = info
    if(!date || !schedule || ! duration) throw new Error('Missing data')
    const bookingsDay = await Booking.findAll({
        where: { date: date, schedule: schedule }
    })
    console.log('Bookings', bookingsDay);
    if(bookingsDay.length) throw new Error('the court is already reserved at that time')
    const newBooking = await Booking.create(info)
    return newBooking;
}