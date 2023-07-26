const { db } = require('../../db')

const Sport = db.Sport
const Court = db.Court

module.exports = async () => {
    const getAllSports = await Sport.findAll()
    return getAllSports;
}

// {
//     attributes: {
//         exclude: [
//             'createdAt',
//             'updatedAt'
//         ]
//     },
//     include:{
//         model: Court,
//         as: 'court',
//         attributes:{
//             exclude: [
//                 'createdAt',
//                 'updatedAt',
//                 'sportId'
//             ]
//         }
//     }
// }