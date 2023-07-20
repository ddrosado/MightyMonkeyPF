require('dotenv').config();
const { Sequelize } = require('sequelize');
const BookingModel = require('./models/Booking')
const CourtModel = require('./models/Court')
const ReviewModel = require('./models/Review')
const UserModel = require('./models/User')
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


const sequelize = new Sequelize('mightymonkey', DB_USER, DB_PASSWORD, {
   host: DB_HOST,
   dialect: 'postgres',
   operatorAliases: false,
   logging: false,
   native: false,
   pool: {
       max: 5,
       min: 0,
       acquire: 30000,
       idle: 10000
   }
})

const db = {}

db.sequelize = sequelize

 db.Booking = BookingModel(sequelize);
 db.Court = CourtModel(sequelize);
 db.Review = ReviewModel(sequelize);
 db.User = UserModel(sequelize);

const { User, Booking, Court, Review} = db.sequelize.models;
// console.log('lskfdcmeklmk', sequelize.models);

User.belongsToMany(Booking, {through:'user_booking'})
Booking.belongsToMany(User, {through:'user_booking'})

User.hasMany(Review,{foreignKey:'userId'})

Court.belongsToMany(Booking,{through:'court_booking'})
Booking.belongsToMany(Court,{through:'court_booking'})

Booking.hasMany(Review,{foreignKey:'bookingId'})

module.exports = {
   db
};