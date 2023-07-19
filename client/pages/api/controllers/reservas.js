import axios from "axios";

export default async function reservas(req, res) {
    switch (req.method) {
        case 'GET':
            const result = await axios.post('http://localhost:3000/api/controllers/users').then(({data}) => data)
            console.log(result);
            // console.log(result.config.method);
            return res.status(200).json({reservas: 'aqui van las reservas'})
        case 'POST':
            return res.status(200).json({reservas: 'post reservas'})    
        default:
            break;
    }
}