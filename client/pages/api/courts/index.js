const getCourt = require('../controllers/courts/getCourt')
const postCourt = require('../controllers/courts/postCourt')
const validations = require('../controllers/courts/courtValidations')

module.exports = async(req, res)=>{
    try {
       validations(req.body)
        switch (req.method){
            case 'GET':
                const court = await getCourt()
                return res.status(200).json(court)
            case 'POST':
                const newCourt = await postCourt()
                return res.status(200).json(newCourt)
        }
        
    } catch (error) {
        return res.status(400).json(error.message)
    }
}