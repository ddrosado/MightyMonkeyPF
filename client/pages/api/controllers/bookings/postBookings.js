const { db } = require('../../db')
db.sequelize.sync()
const { Booking, User, Court } = db

module.exports = async(info) => {
    const { date, hour, userId, courtId } = info
    if(!date || ! hour) throw new Error('Missing data')
    const bookingsDay = await Booking.findAll({
        where: { date: date, hour: hour, courtId: courtId }
    })
    console.log('Bookings', bookingsDay);
    if(bookingsDay.length) throw new Error('the court is already reserved at that time')

    const newBooking = await Booking.create(info)

    const bookingQuery = await Court.findByPk(newBooking.id, {
        attributes: [
            'id', 'date', 'hour'
        ],
        include: [
            {
                model: User,
                as: 'user',
                attributes: [
                    'name',
                    'email'
                ]
            },
            {
                model: Court,
                as: 'court',
                attributes: [
                    'name',
                    'description'
                ]
            }
        ]
    })

    return bookingQuery.dataValues;
}