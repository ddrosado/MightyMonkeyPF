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


  try {
    const htmlstream = fs.createReadStream("./pages/api/controllers/users/mail/content.html");

    await transporter.sendMail({
      from: '"Mighty Monkeys" <mightymonkeys25@gmail.com>',
      to: info.email,
      subject: "Te damos la bienvenida a Mighty Monkeys",
      html: await new Promise((resolve, reject) => {
        let data = '';
        htmlstream.on('data', (chunk) => {
          data += chunk.toString();
        });
        htmlstream.on('end', () => {
          resolve(data);
        });
        htmlstream.on('error', (error) => {
          reject(error);
        });
      }),
    });
  } catch (error) {
    console.error('Error reading HTML file:', error);
  }


  return newUser;
};
