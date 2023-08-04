import { Op } from "sequelize";
import { db } from "../../db";
const { User } = db;

export default async (id) => {
  if ((Array.isArray(id))) {
    const bannedUsers = await User.destroy(
      {
        where: {
          id: {
            [Op.in]: id,
          },
        },
      }
    );
    return `Deleted users ${bannedUsers}`
  }
  else{
    await User.destroy(
        {where: {id : id}}
    )
    return "User deleted"
  }
};
