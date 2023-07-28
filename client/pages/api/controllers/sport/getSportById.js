import { db } from "../../db";
const { Sport, Court } = db;

export default  async (id) => {
    const sport = await Sport.findByPk(id, {
        include:{
        model: Court,
        as: 'court',
        attributes:{
            exclude: [
                'createdAt',
                'updatedAt',
                'sportId'
            ]
        }
    }
    })
    return sport;
};
