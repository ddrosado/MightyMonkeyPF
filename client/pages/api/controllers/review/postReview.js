import {db} from ('../../db')
db.sequelize.sync()
const { User }= db

export default async(review) => {
    const postedReview = await User.create(review)
    return postedReview
}