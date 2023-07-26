import { Op } from 'sequelize';
import {db} from '../../db'
const {Court,Sport} = db

export default async({id})=>{
    let court;
    if(Array.isArray(id)){
       court = await Court.destroy({
            where: {id : {[Op.in]:id}}
        })
    }else{
        court = await Court.destroy({
            where: {id : id}
        })
    }
    return `Registros borrado con exito cant: ${court}`
}