const postSport = require("../controllers/sport/postSports")
const getAllSports = require("../controllers/sport/getSports")
const putSport = require("../controllers/sport/putSport")
export default async(req, res) => {
    switch (req.method) {
        case 'GET':{
            const allSports = await getAllSports();
            return res.status(200).json(allSports)
        }
        case 'POST':
            try {
                const newSport = await postSport(req.body)
                return res.status(200).json(newSport)
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        case 'PUT':{
                const changeSport = await putSport(req.body)
                return res.status(200).json(changeSport)
            }
        default:
            break;
    }
}
