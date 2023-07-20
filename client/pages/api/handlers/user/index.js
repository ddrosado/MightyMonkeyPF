const getAllUsers = require('../../controllers/user/getAllUsers')

module.exports = async(res,req)=>{
    switch (req.method){
        case 'GET':
            try {
                const allUsers = getAllUsers()
                return res.status(200).json(allUsers)
            } catch (error) {
                return res.status(400).json(error.message)
            }
        case 'POST':
            try {
                    
            } catch (error) {
                
            }
        case 'PUT':    
    }
}