import { db } from "../../db";
const { User } = db;
import bcrypt from "bcrypt";

export default async (info) => {
  const password = await bcrypt.hash(info.password, 8);
  // const name = info.name.toLowerCase();
  // const surname = info.surname.toLowerCase();
  const existEmail = await User.findOne({
    where: {
      email: info.email,
    },
  });
  if (existEmail) throw Error("This email is already in use");

  const newUser = await User.create({
    ...info,
    password,
    isActive: true,
  });

  return newUser;
};
