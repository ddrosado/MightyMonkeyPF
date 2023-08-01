const { db } = require('../../db')
db.sequelize.sync()
const { Booking, User, Court } = db

module.exports = async(info) => {
    const { date, hour, userId, courtId } = info
    if(!date || !hour || !userId || !courtId) throw new Error('Missing data')

    // const bookingsDay = await Booking.findAll({
    //     where: { date: date, schedule: schedule }
    // })
    // console.log('Bookings', bookingsDay);
    // if(bookingsDay.length) throw new Error('the court is already reserved at that time')


    // const bookingInfo = {
    //     ...info,
    //     userId: user.id,
    //     courtId: court.id
    // }

    const newBooking = await Booking.create(info)

    const bookingQuery = await Booking.findByPk(newBooking.id, {
        attributes: [
            'id', 'date', 'hour'
        ],
        include: [
            {
                model: User,
                as: 'user',
                attributes: [
                    'id',
                    'name',
                    'email'
                ],
                include:[
                    {
                        model: Booking,
                        as: 'booking',
                        attributes:{
                            exclude: [
                                "createdAt", "updatedAt"
                            ]
                        }
                    },
                ]
            },
            {
                model: Court,
                as: 'court',
                attributes: [
                    'name',
                    'description'
                ],
                include:[
                    {
                        model: Booking,
                        as: 'booking',
                        attributes:{
                            exclude: [
                                "createdAt", "updatedAt"
                            ]
                        }
                    }
                ]
            }
        ]
    })

    return bookingQuery.dataValues;
}