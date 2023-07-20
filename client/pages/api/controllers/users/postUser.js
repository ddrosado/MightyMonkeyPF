const { db } = require('../../db')
db.sequelize.sync()
const User = db.User

module.exports = async(info) => {

    const existEmail = await User.findOne({
        where: {
            email: info.email
        }
    })
    console.log(existEmail);
    if(!existEmail){
        const newUser = await User.create(info)
        return newUser
    }
    else throw new Error('This email is alredy in use')
}