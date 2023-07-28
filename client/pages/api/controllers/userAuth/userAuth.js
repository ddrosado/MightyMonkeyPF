import bcrypt from 'bcrypt'
import { db } from '../../db'
const User = db.User


export default async ({email,password})=>{
    const user = await User.findOne({
        where:{
            email: email,
        }
    })
    if(!user) throw Error('User not found')
    const match = bcrypt.compare(password,user.id)
    if(match){
        return user
    }else{
        throw Error('User not valid')
    }
}

