const {conn} = require('./db')

const conexion = async()=>{
    try{
      //  conn.drop()
       const con = await conn.sync({force:false})
       console.log(conn)
    }catch(error){
       console.log(error)
    }
 }
 conexion()
