import { db } from "./db";
const { User, Booking, Court, Review, Sport, Plan } = db
export default async function (req,res){
    await User.destroy({where :{}})
    await Booking.destroy({where :{}})
    await Court.destroy({where :{}})
    await Review.destroy({where :{}})
    await Sport.destroy({where :{}})
    await Plan.destroy({where :{}})
    res.status(200).json('Borrado todo a la verga perri')
}