

module.exports = async(req,res)=>{
    switch (req.method){
        case 'POST':
            try {
                const {date,schedule,duration} = req.body;
                if(!date || !schedule || !duration) throw Error('Faltan datos')
                const review = await post

            } catch (error) {
                return res.status(400).json()
            }
        case 'GET':
            try {
                
            } catch (error) {
                
            }
        default:
    }
}