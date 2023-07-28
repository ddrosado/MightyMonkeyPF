const {db}= require('../../db')

const {Court, Review, User} = db

module.exports = async () => {
    const courtReview = await Review.findAll({
        where: {
            isDeleted: false,
        },
        include: [
            {
                model: User,
                attributes: ["name", "surname"],
            },
            {
                model: Court,
                attributes: ["name"],
            }
        ]
        
    })
    return courtReview
};