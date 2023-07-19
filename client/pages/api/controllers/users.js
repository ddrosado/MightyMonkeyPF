const { Users } = require('../db')

export default async function getUser(req, res) {
    switch (req.method) {
        case 'GET':{
            // const allUsers = await Users.findAll()
            console.log(Users);
            return res.status(200).json({allUsers: 'this'})
        }
        case 'POST':
            return res.status(200).json({users: 'post user'})    
        default:
            break;
    }
}