// const { Users } = require('../db')
const { db } = require('../../db')
const getAllUsers = require('../../controllers/users/getUsers')
const postUser = require('../../controllers/users/postUser')
db.sequelize.sync()
const User = db.User

export default async(req, res) => {
    switch (req.method) {
        case 'GET':{
            const allUsers = await getAllUsers();
            return res.status(200).json(allUsers)
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