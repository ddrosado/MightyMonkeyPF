import {db} from '../../db'
db.sequelize.sync()
const {Court} = db

export default async (id)=>{
    const court = await Court.findByPk(id)
    return court
}