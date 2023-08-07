import updateSport from "../controllers/sport/updateSport";
import deleteSport from "../controllers/sport/deleteSport";

const postSport = require("../controllers/sport/postSports");
const getAllSports = require("../controllers/sport/getSports");

export default async (req, res) => {
  const { method, body } = req;
  try {
    if (method === "GET") {
      const sport = await getAllSports();
      return res.status(200).json(sport);
    }
    if (method === "POST") {
      const { name, image, description } = body;
      if (!name || !image || !description) throw Error("missing data");
      const sport = await postSport(body);
      return res.status(200).json(sport);
    }
    if (method === "PUT") {
      const { id } = body;
      if (!id) throw Error("missing id");
      const sport = await updateSport(body);
      return res.status(200).json(sport);
    }
    if (method === "DELETE") {
      const { id } = body;
      console.log( "styo ejecutando deleete" + id)
      if (!id) throw Error("missing id");
      const sport = await deleteSport(id);
      return res.status(200).json(sport);
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
