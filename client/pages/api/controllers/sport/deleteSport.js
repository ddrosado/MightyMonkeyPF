const uuid = require('uuid');
import {db} from '../../db'
const {Sport} = db

export default async (id)=>{
    if(!uuid.validate(id)) throw Error('id type not valid or incorrect')
    const sport = await Sport.findByPk(id)
    if(!sport) throw Error('Unnfoud Sport')
    await Sport.destroy({
        where:{id:id}
    })
    return sport
}