const { db } = require('../../db')
db.sequelize.sync()
const { Review }= db

export default async(review) => {
    const postedReview = await Review.create(review)
    return postedReview
}