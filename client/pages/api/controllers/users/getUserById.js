import { db } from "../../db";
const { User } = db;

export default async (id) => {
  const user = await User.findByPk(id)
  return user;
};
