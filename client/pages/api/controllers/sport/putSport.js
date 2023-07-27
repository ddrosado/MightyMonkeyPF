import { db } from "../../db";
const { Sport } = db;

module.exports =  async (sportInfo)=>{
    const sport = await Sport.update(
        sportInfo,
        {
            where: {id:sportInfo.id}
        }
    )
    const updatedSport = await Sport.findByPk(sportInfo.id)
    return updatedSport
}