const uuid = require('uuid');
import {db} from '../../db'
const {Plan} = db

export default async (id)=>{
    const plan = await Plan.findByPk(id)
    if(!plan) throw Error('Unnfoud Plan')
    await Plan.destroy({
        where:{id:id}
    })
    return plan
}