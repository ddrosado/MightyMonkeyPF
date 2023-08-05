import { withSession } from "./controllers/sessionAuth/middleware";
import userAuth from "./controllers/userAuth/userAuth";
import getUserById from "./controllers/users/getUserById";

async function handler(req, res) {
  const { method, body } = req;
  const { set, save, get } = req.session;
  try {
    if (method === "POST") {
      const { name, email, id, isAdmin, image, planId, isActive } = await userAuth(body);
      set("user", { name, email, id, planId, isAdmin, image, isActive });
      await save();
      return res.status(200).json({ session: true, isActive });
    }
    if(method === "GET"){
      const user = get('user')
      const { name, email, id, isAdmin, image, planId, isActive } = await getUserById(user.id)
      set("user", { name, email, id, isAdmin, image, planId, isActive });
      await save();
      return res.status(200).json({ session: true, isActive });
    }
  } catch (error) {
    return res.status(401).json(error.message);
  }
}

export default withSession(handler);
