const { db } = require('../../db')
db.sequelize.sync()
const User = db.User

module.exports = async(email) => {
    const user = await User.findOne({
        where: {
            email: email
        }
    })
    if(!user) throw new Error('Email not found')
    return user;
}
