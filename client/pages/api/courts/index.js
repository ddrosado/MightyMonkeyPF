import deleteCourt from "../controllers/courts/deleteCourt";
import getCourt from "../controllers/courts/getCourt";
import postCourt from "../controllers/courts/postCourt";
import updateCourt from "../controllers/courts/updateCourt"
// const validations = require('../controllers/courts/courtValidations')

export default async (req, res,next) => {

  try {
    switch (req.method) {
      case "GET":
        const court = await getCourt();
        return res.status(200).json(court);
      case "POST":
        const { name, description, isAvailable, noMemberPrice, memberPrice, sport, image } =
          req.body;
        if (
          !name ||
          !image ||
          !description ||
          !isAvailable.toString() ||
          !noMemberPrice ||
          !memberPrice ||
          !sport
        )
          throw Error("missing data");
        const newCourt = await postCourt(req.body);
        return res.status(200).json(newCourt);
        case "PUT":
          const updatedCourt = await updateCourt(req.body)
          return res.status(200).json(updatedCourt);
        case "DELETE":
            const deletedCourt = await deleteCourt(req.body)
            return res.status(200).json(deletedCourt)
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
