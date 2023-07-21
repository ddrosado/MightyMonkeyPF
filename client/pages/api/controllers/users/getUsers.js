const { db } = require('../../db')
db.sequelize.sync()
const User = db.User 

module.exports = async() => {
    const allUsers = await User.findAll();
    return allUsers;
}