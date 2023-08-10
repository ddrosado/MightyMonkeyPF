const {db}= require('../../db')

const {Plan} = db

export default async () => {
    return await Plan.findAll({
        attributes: {
        exclude: [
            'createdAt',
            'updatedAt'
            ]
        }
    })
};