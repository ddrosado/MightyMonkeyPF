import postUser from "./controllers/users/postUser"

export default async (req,res)=>{
    const {body,method} = req
    if(method === 'POST'){
        const data = body.providerData[0]
        return res.status(200).json({
            backend:{
               data
            }
        })
    }
}