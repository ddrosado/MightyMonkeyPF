const payment = require('../controllers/payment/payment')
const cancelSupscription = require('../controllers/payment/cancelSupscription')


export default async(req, res) => {
    try {
        switch (req.method) {
            case 'POST':
                console.log('aaaaadsssssdsdds');
                const pay = await payment({
                    type: "subscriptions",
                    userId: '0e56d120-36e7-11ee-ae5b-e902b0897196',
                    planId: '24e800a0-3672-11ee-9242-65f1bf6f956b',
                  });
                res.status(200).json(pay.body);
            case 'PUT':
                const cancel = await cancelSupscription(req.body)
                res.status(200).json(cancel)
            default:
                break;
        }
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}