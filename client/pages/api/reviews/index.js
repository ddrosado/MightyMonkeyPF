import postReview from '../controllers/review/postReview'
import getReview from '../controllers/review/getReview'

export default async(req,res)=>{
    
    try {
        const {comment,rating,idCourt} = req.body;
        switch (req.method){
            case 'POST':
                if(comment.lenght < 10) throw Error ('Comment is too short')
                if(!comment || !rating || !idCourt) throw Error ("Missiong Data") 
                const review = await postReview(req.body)
                return res.status(200).json(review)
            case 'GET':
                if(!idCourt) throw Error('Missing data: idCourt') 
                const courtReview = await getReview(idCourt)
                return res.status(400).json(courtReview)
            default:
                throw Error('Invalid Route')
        } 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}