const getAllUsers = require("../../controllers/user/getAllUsers")
const postUser = require("../../controllers/user/postUser")

module.exports  = async (req, res) =>   {
    switch (req.method) {
        case 'GET':
    try {
        const users = await getAllUsers()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json(error.message)
    }
        case 'POST':
    try {
        const user = await postUser(req.body)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json(error.message)
    }
    //     case 'PUT':
    // try {
    //     const user = await createUser(req.body)
    //     return res.status(200).json(user)
    // } catch (error) {
    //     return res.status(400).json(error.message)
    // }
}
}