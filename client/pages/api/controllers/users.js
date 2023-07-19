// const { Users } = require('../db')
const { db } = require('../db')
db.sequelize.sync()
const User = db.User

export default async function getUser(req, res) {
    switch (req.method) {
        case 'GET':{
            const allUsers = await User.findAll()
            // console.log(db.sequelize.models);
            // console.log('esto es',allUsers);
            return res.status(200).json({allUsers: allUsers})
        }
        case 'POST':
            return res.status(200).json({users: 'post user'})    
        default:
            break;
    }
}