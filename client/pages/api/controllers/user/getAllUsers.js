const { db } = require('../../db')
db.sequelize.sync({force:true})
const User = db.User

module.exports = async()=>{
    const allUsers = await User.findAll()
    return allUsers
}