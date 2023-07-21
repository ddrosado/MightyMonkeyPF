const { Op } = require('sequelize');
const { db } = require('../../db')
db.sequelize.sync()

const {User} = db;

module.exports = async(name)=>{
    const user = await User.findOne({
        where:{name:{[Op.startsWith]:name}}
    })
    if(!user) throw Error('User not found')
    return user
}