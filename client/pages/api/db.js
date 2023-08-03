require('dotenv').config();

const { Sequelize } = require('sequelize');
const BookingModel = require('../../models/Booking')
const CourtModel = require('../../models/Court')
const ReviewModel = require('../../models/Review')
const UserModel = require('../../models/User')
const SportModel = require('../../models/Sport');
const PlanModel = require('../../models/Plan');
const { faTruckMedical } = require('@fortawesome/free-solid-svg-icons');

// const { postgres_USER, postgres_HOST, postgres_DATABASE, postgres_PASSWORD } = process.env;
const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USER } = process.env;

const sequelize = new Sequelize( DB_NAME,DB_USER, DB_PASSWORD, {
   host:DB_HOST,
   dialect: 'postgres',
   dialectModule: require('pg'),
   force: false,
   operatorAliases: false,
   logging: false,
   native: false,
   // dialectOptions: {
   //    ssl: true, 
   //  },
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
   }
})

// const sequelize = new Sequelize( postgres_DATABASE,postgres_USER, postgres_PASSWORD, {
//    host:postgres_HOST,
//    dialect: 'postgres',
//    dialectModule: require('pg'),
//    force: false,
//    operatorAliases: false,
//    logging: false,
//    native: false,
//    // dialectOptions: {
//    //    ssl: true, 
//    //  },
//    pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//    }
// })

// const sequelize = new Sequelize( postgres_DATABASE,postgres_USER, postgres_PASSWORD, {
//    host:postgres_HOST,
//    dialect: 'postgres',
//    // dialectModule: require('pg'),
//    // force: false,
//    // operatorAliases: false,
//    logging: false,
//    native: false,
//    dialectOptions: {
//       ssl: true, 
//     },
//    pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//    }
// })

const db = {}

db.sequelize = sequelize

db.Booking = BookingModel(sequelize);
db.Court = CourtModel(sequelize);
db.Review = ReviewModel(sequelize);
db.User = UserModel(sequelize);
db.Sport = SportModel(sequelize);
db.Plan = PlanModel(sequelize);


const { User, Booking, Court, Review, Sport, Plan } = db.sequelize.models;


User.hasMany(Booking, {as: "booking", foreignKey:'userId'})
Booking.belongsTo(User, {as: "user", foreignKey:'userId'})

User.hasMany(Review,{as: "review", foreignKey:'userId'})
Review.belongsTo(User,{as: "user",foreignKey:'userId'})

Court.hasMany(Booking,{as:"booking", foreignKey:"courtId"})
Booking.belongsTo(Court,{as:"court", foreingKey:"courtId"})

Sport.hasMany(Court, {as: 'court', foreignKey: 'sportId'})
Court.belongsTo(Sport, {as: 'sport', foreignKey: 'sportId'})

User.hasOne(Plan,{as:"membership", foreignKey: 'planId'})
Plan.hasMany(User,{as:"user", foreignKey: 'planId'})

db.sequelize.sync();

module.exports = {
   db
};