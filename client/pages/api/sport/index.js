import updateSport from "../controllers/sport/updateSport";

const postSport = require("../controllers/sport/postSports")
const getAllSports = require("../controllers/sport/getSports")

export default async(req, res) => {
    try {
        switch (req.method) {
            case 'GET':
                const allSports = await getAllSports();
                return res.status(200).json(allSports)
            case 'POST':
                const newSport = await postSport(req.body)
                return res.status(200).json(newSport)
            case 'PUT':
                const sport = await updateSport(req.body)
                return res.status(200).json(sport)
            default:
                break;
        }    
    } catch (error) {
        return res.status(200).json(error.message)
    }
}
