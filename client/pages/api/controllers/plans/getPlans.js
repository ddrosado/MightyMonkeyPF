const {db}= require('../../db')

const {Plan} = db

module.exports = async () => {
    return await Plan.findAll({
        attributes: {
        exclude: [
            'createdAt',
            'updatedAt'
            ]
        }
    })
};