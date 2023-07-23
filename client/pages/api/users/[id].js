import getUserById from '../controllers/users/getUserById'


export default async(req, res) => {
    const {id}= req.query
    try{
        const user = await getUserById(id)
        return res.status(200).json(user)
    }catch(error){
        return res.status(400).json(error.message)
    }

    }