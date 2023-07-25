const { db } = require('../../db')
db.sequelize.sync()
const Booking = db.Booking

module.exports = async(info) => {
    const bookingToUpdate = await Booking.findOne({
        where: {id: info.id}
    })
    if(!bookingToUpdate) throw new Error('Booking not found')
    const bookingUpdated = await bookingToUpdate.update(info)
    return bookingUpdated
}