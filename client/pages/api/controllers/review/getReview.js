const {db}= require('../../db')
db.sequelize.sync()
const {Court, Review, User} = db

module.exports = async(id)=>{
    const courtReview = await Review.findAll({
        where: {
            courtId: id,
          },
        include: {
            model: User,
            attributes: ["name"],
        }
    })
    return courtReview
}