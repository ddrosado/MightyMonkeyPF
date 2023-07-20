const {conn} = require('./db')

const model = require(__dirname + '/../db/models/' + file)(sequelize, Sequelize.DataTypes);
