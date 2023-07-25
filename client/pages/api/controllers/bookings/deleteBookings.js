const { db } = require('../../db')
db.sequelize.sync()
const Booking = db.Booking

module.exports = async(id) => {
    const bookingDelete = await Booking.findOne({
        where: { id: id }
    })
    if(!bookingDelete) throw new Error('Booking not found')
    await Booking.destroy({
        where: { id: id }
    })
    return bookingDelete
}