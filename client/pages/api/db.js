require('dotenv').config();
<<<<<<< HEAD
const { Sequelize } = require('sequelize');
const BookingModel = require('../models/Booking')
const CourtModel = require('../models/Court')
const ReviewModel = require('../models/Review')
const UserModel = require('../models/User')
const SportModel = require('../models/Sport');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;



const sequelize = new Sequelize('mightyMonkey',DB_USER, DB_PASSWORD, {
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
 db.Sport = SportModel(sequelize);

const { User, Booking, Court, Review, Sport } = db.sequelize.models;


User.hasMany(Booking, {foreignKey:'userId'})
Booking.belongsTo(User, {foreignKey:'userId'})

User.hasMany(Review,{foreignKey:'userId'})
Review.belongsTo(User,{foreignKey:'userId'})

Court.belongsToMany(Booking,{through:'court_booking'})
Booking.belongsToMany(Court,{through:'court_booking'})

Court.hasMany(Review,{foreignKey:'courtId'})
Review.belongsTo(Court,{foreignKey:'courtId'})

Sport.hasMany(Court, {foreignKey: 'sportId'})
Court.belongsTo(Sport, {foreignKey: 'sportId'})

module.exports = {
   db
=======
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/mightyMonkey`,
    {
       logging: false, // set to console.log to see the raw SQL queries
       native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
 );

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Booking, Court, Review} = sequelize.models;

// User.belongsToMany(Booking, {through:'user_booking'})
// Booking.belongsToMany(User, {through:'user_booking'})

// User.hasMany(Review,{foreignKey:'userId'})

// Court.belongsToMany(Booking,{through:'court_booking'})
// Booking.belongsToMany(Court,{through:'court_booking'})

// Booking.hasMany(Review,{foreignKey:'bookingId'})
const conexion = async()=>{
   try{
      const con = await sequelize.sync()
      console.log(con)
   }catch(error){
      console.log(error)
   }
}
conexion()

module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
   Op
>>>>>>> 8435e32dd96cc175f884c1939b988c981ae96066
};