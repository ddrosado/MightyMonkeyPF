
require('dotenv').config();
const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: "TEST-3840529657724541-080815-fba912c6e91d677be2f3b4e4aa59e138-1445796506"
})

export default async(req, res)=> {

    const { method, body } = req;

    
      if(method == "POST"){
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
                success : "https://mighty-monkey-hsepqm1x2-monosfeos.vercel.app/join",
                failure: "https://mighty-monkey-hsepqm1x2-monosfeos.vercel.app/join",
                pending : ""
            },
            auto_return : "approved",
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