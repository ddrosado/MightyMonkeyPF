import {db} from '../../db'
const {Sport} = db

export default async (id)=>{
    const sport = await Sport.findByPk(id)
    if(!sport) throw Error('Unnfoud Sport')
    await Sport.destroy({
        where:{id:id}
    })
    return "sport deleted"
}