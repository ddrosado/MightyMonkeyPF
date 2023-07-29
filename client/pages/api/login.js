import { withSession } from "./controllers/sessionAuth/middleware";
import userAuth from "./controllers/userAuth/userAuth";

async function handler(req, res) {
  const { method, body } = req;
  const { set, get, save } = req.session;
  try {
    // if (method === "GET") {
    //   const user = get("user");
    //   if (!user) res.status(403).json({ session: false})
    //   return res.status(200).json({ session: true });
    // }
    if (method === "POST") {
      const { name, email, id, isMember, isAdmin } = await userAuth(body);
      set("user", { name, email, id, isMember, isAdmin });
      await save();
      return res.status(200).json({ session: true });
    }
  } catch (error) {
    return res.status(401).json(error.message);
  }
}

export default withSession(handler);
