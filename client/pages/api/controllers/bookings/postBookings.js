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
  
    return newBooking;
  };