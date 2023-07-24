import { db } from "../../db";
db.sequelize.sync();
const { User } = db;

export default async () => {
  const allUsers = await User.findAll();
  return allUsers;
};
