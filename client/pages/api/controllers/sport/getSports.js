const { db } = require('../../db')
db.sequelize.sync()
const Sport = db.Sport
const Court = db.Court

module.exports = async () => {
    const getAllSports = await Sport.findAll()
    return getAllSports;
}

