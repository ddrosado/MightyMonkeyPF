import {db} from '../../db'
const {Court} = db

export default async (id)=>{
    const court = await Court.findByPk(id)
    return court
}