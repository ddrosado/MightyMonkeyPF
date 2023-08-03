import { withSession } from "./controllers/sessionAuth/middleware";
import userAuth from "./controllers/userAuth/userAuth";

async function handler(req, res) {
  const { method, body } = req;
  const { set, save } = req.session;
  try {
    if (method === "POST") {
      const { name, email, id, isAdmin, image, planId } = await userAuth(body);
      set("user", { name, email, id, planId, isAdmin, image });
      await save();
      return res.status(200).json({ session: true });
    }
  } catch (error) {
    return res.status(401).json(error.message);
  }
}

export default withSession(handler);
