require('dotenv').config();
const { Sequelize } = require('sequelize');
const BookingModel = require('../../models/Booking')
const CourtModel = require('../../models/Court')
const ReviewModel = require('../../models/Review')
const UserModel = require('../../models/User')
const SportModel = require('../../models/Sport');
const PlanModel = require('../../models/Plan');
const MembershipModel = require('../../models/Membership')
const { faTruckMedical } = require('@fortawesome/free-solid-svg-icons');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
   host:DB_HOST,
   dialect: 'postgres',
   force: false,
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
db.Sport = SportModel(sequelize);
db.Plan = PlanModel(sequelize);
db.Membership = MembershipModel(sequelize);

const { User, Booking, Court, Review, Sport, Plan, Membership } = db.sequelize.models;


User.hasMany(Booking, {as: "booking", foreignKey:'userId'})
Booking.belongsTo(User, {as: "user", foreignKey:'userId'})

User.hasMany(Review,{as: "review", foreignKey:'userId'})
Review.belongsTo(User,{as: "user",foreignKey:'userId'})

Court.hasMany(Booking,{as:"booking", foreignKey:"courtId"})
Booking.belongsTo(Court,{as:"court", foreingKey:"courtId"})

Court.hasMany(Review,{as:"review", foreignKey:'courtId'})
Review.belongsTo(Court,{as: "court", foreignKey:'courtId'})

Sport.hasMany(Court, {as: 'court', foreignKey: 'sportId'})
Court.belongsTo(Sport, {as: 'sport', foreignKey: 'sportId'})

User.hasOne(Membership,{as:"membership", foreignKey: 'userId'})
Membership.belongsTo(User,{as:"user", foreignKey: 'userId'})

Plan.hasMany(Membership,{as:"membership", foreignKey:"planId"})
Membership.belongsTo(Plan,{as:"plan", foreignKey:"planId"})

db.sequelize.sync();

module.exports = {
   db
};