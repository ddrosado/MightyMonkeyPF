import bcrypt from 'bcrypt'
import { db } from '../../db'
const User = db.User


export default async ({email,password})=>{
    if(!password) throw Error('User or password not valid')
    const user = await User.findOne({
        where:{
            email: email,
        }
    })
    if(!user)  throw Error('User or password not valid')
    const match = await bcrypt.compare(password,user.password)
    if(match){
        return user
    }else{
        throw Error('User or password not valid')
    }
}

