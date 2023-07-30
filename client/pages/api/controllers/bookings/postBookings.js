const { db } = require('../../db')
db.sequelize.sync()
const { Booking, User, Court } = db

module.exports = async(info) => {
    const { date, schedule, duration, userEmail, courtName } = info
    if(!date || !schedule || ! duration) throw new Error('Missing data')
    const bookingsDay = await Booking.findAll({
        where: { date: date, schedule: schedule }
    })
    console.log('Bookings', bookingsDay);
    if(bookingsDay.length) throw new Error('the court is already reserved at that time')
    
    const user = await User.findOne({ where: { email: userEmail }});
    const court = await Court.findOne({ where: { name: courtName }});

    const bookingInfo = {
        ...info,
        userId: user.id,
        courtId: court.id
    }

    const newBooking = await Booking.create(bookingInfo)

    const bookingQuery = await Court.findByPk(newBooking.id, {
        attributes: [
            'id', 'date', 'schedule', 'duration'
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