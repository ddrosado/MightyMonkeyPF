const uuid = require('uuid');
import {db} from '../../db'
const {Plan} = db

export default async (id)=>{
    if(!uuid.validate(id)) throw Error('id type not valid or incorrect')
    const plan = await Plan.findByPk(id)
    if(!plan) throw Error('Unnfoud Plan')
    await Plan.destroy({
        where:{id:id}
    })
    return plan
}