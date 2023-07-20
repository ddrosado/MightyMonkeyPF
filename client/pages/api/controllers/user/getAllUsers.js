const {db} = require('../../db')
db.sequelize.sync({force: true})
const {User} = db


module.exports = async () => { 
    const users = await  User.findAll()
    return users
}