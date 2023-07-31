const { db } = require('../../db');
db.sequelize.sync()
const { Membership, Plan, User } = db

module.exports = async (info) => {
    if(!info.id || !info.isActive || !info.plan || !info.user ) throw new Error('Missing data')

    const plan = await Plan.findOne({ where: { name: info.plan }})
    const user = await User.findOne({ where: { email: info.user }})

    const newMember = await Membership.create({ id: info.id, isActive: info.isActive, planId: plan.id, userId: user.id })


    const memberQuery = await Membership.findByPk(newMember.id, {
        attributes: [
            'id', 'isActive'
        ],
        include: [
            {
            model: Plan,
            as: 'plan',
            attributes: [
                'name', 'price', 'description'
            ]
        },
        {
            model: User,
            as: 'user',
            attributes: [
                'name', 'email'
            ]
        }
    ]
    })
    return memberQuery.dataValues
}