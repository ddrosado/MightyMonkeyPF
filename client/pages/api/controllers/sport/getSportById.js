import { db } from "../../db";
db.sequelize.sync();
const { Sport } = db;

export default  async (id) => {
    const sport = await Sport.findByPk(id)
    return sport;
};
