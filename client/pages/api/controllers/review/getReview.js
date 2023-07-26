const {db}= require('../../db')

const {Court, Review, User} = db

module.exports = async(id)=>{
    const courtReview = await Review.findAll({
        include: {
            model: User,
            attributes: ["name"],
        }
    })
    return courtReview
}