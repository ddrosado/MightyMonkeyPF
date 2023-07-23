const { User } = require('../../db')
// import { User } from '../../db'

module.exports = async(req, res)=> {
  // console.log('')
  try{
    const user = await User.findAll()
    res.status(200).json(user)
  }catch(error){
    res.status(400).json(error.message)
  }
}