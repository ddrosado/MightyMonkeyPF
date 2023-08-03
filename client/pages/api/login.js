import { withSession } from "./controllers/sessionAuth/middleware";
import userAuth from "./controllers/userAuth/userAuth";

async function handler(req, res) {
  const { method, body } = req;
  const { set, save } = req.session;
  try {
    if (method === "POST") {
<<<<<<< HEAD
      const { name, surname, email, id, isMember, isAdmin, isActive } = await userAuth(body);
      set("user", { name, surname, email, id, isMember, isAdmin, isActive });
=======
      const { name, email, id, isAdmin, image, planId, isActive } = await userAuth(body);
      set("user", { name, email, id, planId, isAdmin, image, isActive });
>>>>>>> 26d294b7c928629c3c93f2d24bd2d4f9a77e25e2
      await save();
      return res.status(200).json({ session: true, isActive });
    }
  } catch (error) {
    return res.status(401).json(error.message);
  }
}

export default withSession(handler);
