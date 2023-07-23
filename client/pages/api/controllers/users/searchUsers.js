import { Op } from "sequelize";
import { db } from "../../db";
db.sequelize.sync();
const { User } = db;

export default async (userInfo) => {
  let users;
  if (userInfo.name)
    users = await User.findAll({
      where: {
        name: { [Op.startsWith]: userInfo.name },
      },
    });
  if (userInfo.surname)
    users = await User.findAll({
      where: {
        surname: { [Op.startsWith]: userInfo.surname },
      },
    });
  if (userInfo.email)
    users = await User.findAll({
      where: {
        email: { [Op.startsWith]: userInfo.email },
      },
    });
    
  if(!users?.length) throw Error('there are not user coincidencies')
  return users
};
