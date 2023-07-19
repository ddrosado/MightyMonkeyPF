export default async function getReviews(req, res) {
    switch (req.method) {
        case 'GET':
            return res.status(200).json({reviews: 'aqui van las reviews'})
        case 'POST':
            return res.status(200).json({reviews: 'post review'})    
        default:
            break;
    }
}