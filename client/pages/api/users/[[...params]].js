const getUserByEmail = require('../controllers/users/getUserByEmail')
const getUserById = require('../controllers/users/getUserById')
const getUserByName = require('../controllers/users/getUserByName')

const { db } = require('../db')
const User = db.User

export default async(req, res) => {
    try {
        const { params } = req.query

        switch (params[0]) {
            case 'id':
                const user = await getUserById(params[1])
                return res.status(200).json(user)
            
            case 'name':
                const users = await getUserByName(params[1])
                return res.status(200).json(users)
            default:
                throw new Error('ruta no encontrada')
            
            case 'email':
                const userEmail = await getUserByEmail(params[1])
                return res.status(200).json(userEmail)
            
        }
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}