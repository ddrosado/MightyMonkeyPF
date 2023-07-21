const getUserById = require('../controllers/users/getUserById')
const getUserByName = require('../controllers/users/getUserByName')


export default async(req, res) => {
    const {params }= req.query
 
        switch (params[0]) {
            case 'id':
                try {
                    const user = await getUserById(params[1])
                    return res.status(200).json(user)     
                } catch (error) {
                    return res.status(400).json(error.message)
                }
            case 'name':
                try {
                    const userByName = await getUserByName(params[1]) 
                    return res.status(200).json(userByName)
                } catch (error) {
                    res.status(400).json(error.message)
                }
            default:
                throw new Error('ruta no encontrada')
        }
        
     
    }