const getAllUsers = require('../controllers/Users/users')

export default async function getUser(req, res) {
    switch (req.method) {
        case 'GET':{
            // const allUsers = await getAllUsers()
            console.log(getAllUsers);
            return res.status(200).json({allUsers: getAllUsers()})
        }
        case 'POST':
            return res.status(200).json({users: 'post user'})
        default:
            break;
    }
}