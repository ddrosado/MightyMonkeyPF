import { transporter } from "../utils/mails";

export default async (email)=>{

    const htmlstream = fs.createReadStream("./mail/content.html");

    console.log("estoy por enviar el mail")
    await transporter.sendMail({
    from: '"Mighty Monkeys" <mightymonkeys25@gmail.com>',
    to: email,
    subject: "Te damos la bienvenida a Mighty Monkeys",
    html: htmlstream.on('data', (data) => data.toString()),
  });
}