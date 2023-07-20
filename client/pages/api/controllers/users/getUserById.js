const { db } = require('../../db')
db.sequelize.sync()
const User = db.User

module.exports = async(id) => {
    const user = await User.findOne({
        where: {
            id: id
        }
    })
    if(!user) throw new Error('User not found')
    return user;
}