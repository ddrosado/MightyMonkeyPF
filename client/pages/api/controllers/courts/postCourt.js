import { db } from "../../db";
const { Court, Sport } = db;

export default async (courtInfo) => {
  const alreadyExist = await Court.findOne({ where: { name: courtInfo.name } });
  if (alreadyExist) throw Error("name already in use");
  const sport = await Sport.findOne({ where: { name: courtInfo.sport } });
  if (!sport) throw Error("sport type is not listed in Sport table");

    const newCourt = {
        ...courtInfo,
        sportId: sport.id
    }

  const court = await Court.create(newCourt);
  const courtQuery = await Court.findByPk(court.id, {
    attributes: [
    "id",
    "name",
    "image",
    "description",
    "isAvailable",
    "nonMemberPrice",
    "memberPrice",
    ],
    include:{
        model: Sport,
        as: 'sport',
        attributes:[
            'name',
            'description'
        ]
    }
  });
  return {
    ...courtQuery.dataValues,
  }
};
