const {db} = require('../../db')
db.sequelize.sync({force: true})
const {User} = db

module.exports  = async (info) => {
  const user = await User.create(info)
  return user
}

