import { payment } from 'mercadopago'
import { transporter } from '../utils/mails'
import user from '../../user'
const { db } = require('../../db')
db.sequelize.sync()
const { Booking, User, Court } = db

module.exports = async(info) => {
    const { date, hour, userId, courtId } = info
    if(!date || !hour || !userId || !courtId) throw new Error('Missing data')

    const user = await User.findOne({ where: { id: userId }})
    const court = await Court.findOne({ where: { id: courtId }})

    const newBooking = await Booking.create(info)

    await transporter.sendMail({
        from: '"Mighty Monkeys" <mightymonkeys25@gmail.com>',
        to: user.email,
        subject: "Reserva cancha Mighty Monkeys",
        text: 'Tu reserva',
        html: `<head>
        <style>
            #button {
                background-color: black;
                color: #fff;
                text-decoration: none;
                padding: 12px 20px;
                border: none;
                border-radius: 4px;
                font-size: 16px;
                cursor: pointer;
            }
    
            #button:hover {
                background-color: rgb(255, 218, 96);
                color: black;
            }
        </style>
    </head>
        <img src="https://i.ibb.co/B4B4NLV/logo.png" width='160px' heigth='150px' id="image" alt="">
        <h1>Tu reserva</h1>
        <h2>Date: ${date}</h2>
        <h2>Hour: ${info.hour[0]}hrs</h2>
        <h2>Court: ${court.name}</h2>
        <h2>Payment state: ${info.payment? info.payment.type: 'no pay'}</h2>
    
        <a id="button" href='https://mighty-monkey-pf.vercel.app/home'>
            Ir a la página
        </a>`,
      });

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
            },
            {
                model: Court,
                as: 'court',
                attributes: [
                    'name',
                    'description'
                ],
            }
        ]
    })

    return bookingQuery.dataValues;
}