import userAuth from "./controllers/userAuth/userAuth";
import postUser from "./controllers/users/postUser";
import { withSession } from "./controllers/sessionAuth/middleware";
import { transporter } from './controllers/utils/mails'
const fs = require('fs')
const htmlstream = fs.createReadStream("./pages/api/controllers/users/mail/content.html");

async function handler(req, res) {
  const { body } = req;
  const { set, save } = req.session;
  const data = body.providerData[0];
  try {
    const { email, uid: password } = data;
    const existingUser = await userAuth({ email, password });
    const userInfo = {
      name: existingUser.name,
      surname: existingUser.surname,
      email: existingUser.email,
      id: existingUser.id,
      isAdmin: existingUser.isAdmin,
      isActive: existingUser.isActive,
      image: existingUser.image,
      planId: existingUser.planId,
    };
    set("user", userInfo);
    await save();
    return res.status(200).json({ session: true, isActive: userInfo.isActive });
  } catch (error) {
    try{
        const newUser = {
          name: data.displayName?.split(" ")[0],
          surname: data.displayName?.split(" ")[1],
          image: data.photoURL,
          email: data.email,
          telelephone: data.phoneNumber,
          password: data.uid,
        };
        const { name, email, id, isAdmin, image, planId, surname, isActive } = await postUser(
          newUser
        );
        set("user", { name, email, id, planId, isAdmin, image, surname, isActive });
        await save();
        await transporter.sendMail({
            from: '"Mighty Monkeys" <mightymonkeys25@gmail.com>',
            to: email,
            subject: "Te damos la bienvenida a Mighty Monkeys",
            html: htmlstream.on('data', (data) => data.toString()),
          });
        return res.status(200).json( {session:true, isActive} );
    }catch(error){
        return res.status(400).json(error)
    }
  }
}

export default withSession(handler);