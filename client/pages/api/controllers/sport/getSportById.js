const uuid = require('uuid');
import { db } from "../../db";
const { Sport, Court } = db;

export default  async (id) => {
    if(!uuid.validate(id)) throw Error('id type not valid or incorrect')
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
