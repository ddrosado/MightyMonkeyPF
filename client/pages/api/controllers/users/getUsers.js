import { db } from "../../db";
db.sequelize.sync({force: true});
const { User } = db;

export default async () => {
  const allUsers = await User.findAll();
  return allUsers;
};
