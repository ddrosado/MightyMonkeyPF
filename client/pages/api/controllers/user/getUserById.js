const { db } = require('../../db')
db.sequelize.sync({force:true})
const User = db.User

module.exports = async(id)=>{
    const user = User.findByPk(id)
    return user
}