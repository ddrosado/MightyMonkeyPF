import { db } from "../../db";
const { Plan } = db;
export default async (info) => {
  const plan = await Plan.update(info, {
    where: { id: info.id },
  })
  if (!plan) return plan;
  const updatePlan = await Plan.findByPk(
    info.id,
    {
        attributes: {
          exclude: [
            'createdAt',
            'updatedAt'
          ]
        },
      }
      );
    if(!updatePlan) throw Error('unnfound Sport')
    return updatePlan;
};