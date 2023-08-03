import userAuth from "./controllers/userAuth/userAuth";
import postUser from "./controllers/users/postUser";
import { withSession } from "./controllers/sessionAuth/middleware";
import { transporter } from "./controllers/mailer/transporter";

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
    return res.status(200).json({ session: true });
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
        const info = await transporter.sendMail({
          from: '"Hello there"<matiasxzca3000@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "New Account", // Subject line
          html: "<h1>Welcome to mightymonkey club</h1>", // html body
        });
        console.log(info.messageId)
        return res.status(200).json( {session:true} );
    }catch(error){
        return res.status(400).json(error)
    }
  }
}

export default withSession(handler);
