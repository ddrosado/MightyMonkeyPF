const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'mightymonkeys25@gmail.com',
    pass: 'ivioquzngtvhngjq'
  },
  tls: {
    rejectUnauthorized: false
  }
});

