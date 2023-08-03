const { db } = require('../../db')
db.sequelize.sync()
const { Booking, User, Court } = db

module.exports = async() => {
    const bookings = await Booking.findAll({
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
                // include:[
                //     {
                //         model: Booking,
                //         as: 'booking',
                //         attributes:{
                //             exclude: [
                //                 "createdAt", "updatedAt"
                //             ]
                //         }
                //     },
                // ]
            },
            {
                model: Court,
                as: 'court',
                attributes: [
                    'name',
                    'description'
                ],
                // include:[
                //     {
                //         model: Booking,
                //         as: 'booking',
                //         attributes:{
                //             exclude: [
                //                 "createdAt", "updatedAt"
                //             ]
                //         }
                //     }
                // ]
            }
        ]
    })

    return bookings;
}