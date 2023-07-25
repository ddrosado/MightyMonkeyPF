const { db } = require('../../db')
db.sequelize.sync()
const Sport = db.Sport

module.exports = async(info) => {
    const existSport = await Sport.findOne({
        where: {
            name: info.name
        }
    })
    
    if(!existSport){
        const newSport = await Sport.create(info)
        return newSport
    }
    else throw new Error('This sport is alredy in use')
}