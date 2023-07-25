import mercadopago from "mercadopago";


export default async(req, res) => {
    try {
        console.log(req.query);
        const payment = req.query
        if(payment.type === 'payment') {
            const data = await mercadopago.payment.findById(payment['data.id']);
            console.log(data);
            res.status(200).json(data);
        }
    } catch (error) {
        
    }
}