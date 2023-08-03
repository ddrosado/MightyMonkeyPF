import { withSession } from "./controllers/sessionAuth/middleware";
import userAuth from "./controllers/userAuth/userAuth";

async function handler(req, res) {
  const { method, body } = req;
  const { set, save } = req.session;
  try {
    if (method === "POST") {
      const { name, surname, email, id, isMember, isAdmin, isActive } = await userAuth(body);
      set("user", { name, surname, email, id, isMember, isAdmin, isActive });
      await save();
      return res.status(200).json({ session: true });
    }
  } catch (error) {
    return res.status(401).json(error.message);
  }
}

export default withSession(handler);
