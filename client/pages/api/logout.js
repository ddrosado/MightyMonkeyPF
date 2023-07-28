import { withSession } from "./controllers/sessionAuth/middleware";

const handler = async (req, res) => {
  await req.session.destroy();
  return res.status(200).json({ message: "Closed session succesful" });
};

export default withSession(handler);
