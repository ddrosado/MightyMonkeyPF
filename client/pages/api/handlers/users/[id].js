const getUserById = require('../../controllers/users/getUserById')
const { db } = require('../../db')
const User = db.User

export default async(req, res) => {
    try {
        const { id } = req.query
        const userFound = await getUserById(id)
        return res.status(200).json(userFound)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}