import getSportById from "../controllers/sport/getSportById";

export default async (req, res) =>  {
    const {id} = req.query;
    try {
        const sport = await getSportById(id);
        res.status(200).json(sport)}
    catch(error) {
        res.status(500).json({error: error.message})
    }
}