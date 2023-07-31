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

    return bookings;
}