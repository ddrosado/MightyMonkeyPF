import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    tls: {
      rejectUnauthorized: false, // Desactivar la validación de certificados
    },
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'matiasxzca3000@gmail.com',
      pass: 'gzrnywbsbzkkoczd'
    }
  });

