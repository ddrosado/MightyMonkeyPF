const { Op } = require('sequelize')
const { db } = require('../../db')
db.sequelize.sync()
const User = db.User

module.exports = async(name) => {
    const users = await User.findAll({
        where: {
            name: {
                [Op.startsWith]: name
            }
        }
    })
    return users
}