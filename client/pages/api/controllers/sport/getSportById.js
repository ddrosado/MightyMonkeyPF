import { db } from "../../db";
const { Sport } = db;

export default  async (id) => {
    const sport = await Sport.findByPk(id)
    return sport;
};
