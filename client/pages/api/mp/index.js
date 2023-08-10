
require('dotenv').config();
const mercadopago = require("mercadopago");


export default async(req, res)=> {
    mercadopago.configure({
        access_token: process.env.acces_token_mp
    })

    const { method, body } = req;

    
      if(method === "POST"){
        try {
        
        const {product, user} = body
        let preference = {
            items: [
              {
                title: product.description,
                unit_price: Number(product.price),
                quantity: 1,
              },
            ],
            back_urls:{
                success : "http://localhost:3000/join",
                failure: "http://localhost:3000/join",
                pending : ""
            },
            auto_return : "approved",
            notification_url: 'https://mighty-monkey-pf-git-devs-monosfeos.vercel.app/api/webHookPay'
          };

          try {
            const response = await mercadopago.preferences.create(preference);
      
            res.status(200).json({ id: response.body.id });
          } catch (preferenceError) {
            console.error("Error al crear la preferencia:", preferenceError);
            res.status(500).json({ error: "Error al crear la preferencia" });
          }
            
      }
      
    catch (error) {
      res.status(400).json(error, "catch ")
    }
  }
    
  
}