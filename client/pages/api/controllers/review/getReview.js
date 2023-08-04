const {db}= require('../../db')

const {Review, User} = db

module.exports = async () => {
    const review = await Review.findAll({
         include: [
            {
                model: User,
                as: 'user',
                attributes: ["name", "surname","image"],
            },
        ]
        
    })
    return review
};