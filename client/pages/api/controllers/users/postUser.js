import { transporter } from '../utils/mails'
import { db } from "../../db";
const { User } = db;
import bcrypt from "bcrypt";
const fs = require('fs')

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

  var htmlstream = fs.createReadStream("content.html");
  await transporter.sendMail({
    from: '"Mighty Monkeys :see_no_evil:" <mightymonkeys25@gmail.com>', // sender address
    to: info.email, // list of receivers
    subject: "Gracias por registrarte en Mighty Monkeys", // Subject line
    // text: "Hello world?", // plain text body
    html: htmlstream, // html body
  });
  return newUser;
};
