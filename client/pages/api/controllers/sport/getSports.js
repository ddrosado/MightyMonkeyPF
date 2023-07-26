const { db } = require('../../db')
db.sequelize.sync()
const Sport = db.Sport
const Court = db.Court

module.exports = async () => {
    const getAllSports = await Sport.findAll(
        {
            attributes: {
                exclude: [
                    'createdAt',
                    'updatedAt'
                ]
            },
            include:{
                model: Court,
                as: 'court',
                attributes:{
                    exclude: [
                        'createdAt',
                        'updatedAt',
                        'sportId'
                    ]
                }
            }
        }
    )
    return getAllSports;
}

