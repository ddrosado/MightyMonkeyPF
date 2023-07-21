const getUserById = require('../controllers/users/getUserById')

const { db } = require('../db')
const User = db.User

export default async(req, res) => {
    try {
        const { params } = req.query

        switch (params[0]) {
            case 'id':
                const user = await getUserById(params[1])
                return res.status(200).json(user)
        
            default:
                throw new Error('ruta no encontrada')
        }
        // const userFound = await getUserById(id)
        return res.status(200).json(req.query)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}