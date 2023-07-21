const getAllUsers = require('../controllers/users/getUsers')
const postUser = require('../controllers/users/postUser')

export default async (req, res)=>{

    switch (req.method) {
        case 'GET':
            try {
                const allUsers = await getAllUsers();
                return res.status(200).json(allUsers)
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        case 'POST':
            try {
                const newUser = await postUser(req.body)
                return res.status(200).json(newUser)
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        default:
            break;
    }
    

}
