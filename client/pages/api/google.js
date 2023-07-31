export default async (req,res)=>{
    const {body,method} = req
    if(method === 'POST'){
        const infoUser = {...body}
        return res.status(200).json({
            backend:{
               infoUser
            }
        })
    }
}