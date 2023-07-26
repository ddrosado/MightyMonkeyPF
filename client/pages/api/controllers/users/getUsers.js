import { db } from "../../db";
const { User } = db;

export default async () => {
  const allUsers = await User.findAll();
  return allUsers;
};
