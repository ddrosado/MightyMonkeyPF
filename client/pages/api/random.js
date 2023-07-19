



module.exports= async(req, res)=> {
  try{
    
    console.log(user)
  }catch(error){
    res.status(400).json(error.message)
  }

}