import getCourtById from "../controllers/courts/getCourtById";

export default async (req,res)=>{
    const {id}= req.query
    try{
        const court = await getCourtById(id);
        return res.status(200).json(court)
    }catch(error){
        return res.status(200).json(error.message)
    }
}