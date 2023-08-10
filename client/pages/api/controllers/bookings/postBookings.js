import { payment } from 'mercadopago'
import { transporter } from '../utils/mails'
import user from '../../user'
const { db } = require('../../db')
db.sequelize.sync()
const { Booking, User, Court } = db

module.exports = async (info) => {
    const { date, hour, userId, courtId } = info;
    if (!date || !hour || !userId || !courtId) throw new Error('Missing data');
  
    const bookingsDay = await Booking.findAll({
      where: { date: date, hour: hour, courtId: courtId }
    });
  
    if (bookingsDay.length) throw new Error('The court is already reserved at that time');
  
    const bookingInfo = {
      date,
      hour, 
      userId,
      courtId
    };
  
    const newBooking = await Booking.create(bookingInfo);
    // console.log(info)
    // await transporter.sendMail({
    //     from: '"Mighty Monkeys" <mightymonkeys25@gmail.com>',
    //     to: user.email,
    //     subject: "Reserva cancha Mighty Monkeys",
    //     text: 'Tu reserva',
    //     html: `<head>
    //     <style>
    //         #button {
    //             background-color: black;
    //             color: #fff;
    //             text-decoration: none;
    //             padding: 12px 20px;
    //             border: none;
    //             border-radius: 4px;
    //             font-size: 16px;
    //             cursor: pointer;
    //         }
    
    //         #button:hover {
    //             background-color: rgb(255, 218, 96);
    //             color: black;
    //         }
    //     </style>
    // </head>
    //     <img src="https://i.ibb.co/B4B4NLV/logo.png" width='160px' heigth='150px' id="image" alt="">
    //     <h1>Tu reserva</h1>
    //     <h2>Date: ${date}</h2>
    //     <h2>Hour: ${info.hour[0]}hrs</h2>
    //     <h2>Court: ${courtId.name}</h2>
    //     <h2>Payment state: ${info.payment? info.payment.type: 'no pay'}</h2>
    
    //     <a id="button" href='https://mighty-monkey-pf.vercel.app/home'>
    //         Ir a la página
    //     </a>`,
    //   });
  
    return newBooking;
  };
