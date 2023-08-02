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
                as: 'user',
                attributes: ["name", "surname"],
            },
        ]
        
    })
    return courtReview
};