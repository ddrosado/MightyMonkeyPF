import { payment } from 'mercadopago'
import { transporter } from '../utils/mails'
import user from '../../user'
const { db } = require('../../db')
db.sequelize.sync()
const { Booking, User, Court } = db

module.exports = async(info) => {
    const { date, hour, userId, courtId } = info
    if(!date || !hour || !userId || !courtId) throw new Error('Missing data')
    const bookingsDay = await Booking.findAll({
        where: { date: date, hour: hour, courtId: courtId }
    })
    console.log('Bookings', bookingsDay);
    if(bookingsDay.length) throw new Error('the court is already reserved at that time')
    
    // const user = await User.findOne({ where: { id: userId }});
    // const court = await Court.findOne({ where: { id: courtId }});

    const bookingInfo = {
        ...info,
    }

    const newBooking = await Booking.create(bookingInfo)

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
                    'surname',
                    'email'
                ],
            },
            {
                model: Court,
                as: 'court',
                attributes: [
                    'name'
                ]
            }
        ]
    })

    return bookingQuery.dataValues;
}