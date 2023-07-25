import searchUsers from '../controllers/users/searchUsers';
import getAllUsers from '../controllers/users/getUsers'
import postUser from '../controllers/users/postUser'
import updateUser from '../controllers/users/putUser'
import deleteUser from '../controllers/users/deleteUser'
export default async (req, res)=>{
    
    try{
        switch (req.method) {
            case 'GET':
                if(Object.entries(req.query).length) return res.status(200).json(await searchUsers(req.query))
                return res.status(200).json(await getAllUsers())
            case 'POST':
                    const newUser = await postUser(req.body)
                    return res.status(200).json(newUser)
            case 'PUT':
                    const userUpdate = await updateUser(req.body)
                    return res.status(200).json(userUpdate)
            case 'DELETE':
                    const userDeleted = await deleteUser(req.body)
                    return res.status(200).json(userDeleted)
            default:
                break;
            }
        }catch(error){
            return res.status(400).json(error.message)
        }
    
}
