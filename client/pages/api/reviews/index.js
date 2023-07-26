import postReview from '../controllers/review/postReview'
import getReview from '../controllers/review/getReview'
import deleteReview from '../controllers/review/deleteReview'
export default async(req,res)=>{
    
    try {
        const {comment,rating,courtId} = req.body;
        switch (req.method){
            case 'POST':
                if(comment.lenght < 10) throw Error ('Comment is too short')
                if(!comment || !rating || !courtId) throw Error ("Missiong Data") 
                const review = await postReview(req.body)
                return res.status(200).json(review)
            case 'GET':
                const courtReview = await getReview()
                return res.status(400).json(courtReview)
            case 'DELETE':
            const reviewUpdate = await deleteReview(req.body)
            return res.status(200).json(reviewUpdate)
            default:
                throw Error('Invalid Route')
        } 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}