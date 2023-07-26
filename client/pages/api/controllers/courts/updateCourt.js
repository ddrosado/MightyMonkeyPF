import { db } from "../../db";
const { Court } = db;

export default async (courtInfo)=>{
    const court = await Court.update(
        courtInfo,
        {
            where: {id:courtInfo.id}
        }
    )
    const updatedCourt = await Court.findByPk(courtInfo.id)
    return updatedCourt
}