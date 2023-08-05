const { db } = require('../../db')
db.sequelize.sync()
const Plan = db.Plan

module.exports = async(info) => {
    const existPlan = await Plan.findOne({
        where :{
            name : info.name
        }
    })

    if(existPlan)  throw new Error('This plan is alredy in use')
    else {
        const newPlan = await Plan.create(info)
        return newPlan
    }   
}