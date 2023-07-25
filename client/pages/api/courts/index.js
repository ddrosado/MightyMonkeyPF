import getCourt from "../controllers/courts/getCourt";
import postCourt from "../controllers/courts/postCourt";
// const validations = require('../controllers/courts/courtValidations')

export default async (req, res,next) => {

  try {
    switch (req.method) {
      case "GET":
        const court = await getCourt();
        return res.status(200).json(court);
      case "POST":
        const { name, description, isAvailable, NonMemberFee, memberFee, sport } =
          req.body;
        if (
          !name ||
          !description ||
          !isAvailable.toString() ||
          !NonMemberFee ||
          !memberFee ||
          !sport
        )
          throw Error("missing data");
        const newCourt = await postCourt(req.body);
        return res.status(200).json(newCourt);
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
