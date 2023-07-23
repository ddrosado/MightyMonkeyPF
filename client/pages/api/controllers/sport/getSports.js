const { db } = require('../../db')
db.sequelize.sync()
const Sport = db.Sport

module.exports = async () => {
    const getAllSports = await Sport.findAll()
    return getAllSports
}

