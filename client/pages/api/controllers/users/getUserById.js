import { db } from "../../db";
db.sequelize.sync();
const { User } = db;

export default async (id) => {
  const user = await User.findByPk(id)
  return user;
};
