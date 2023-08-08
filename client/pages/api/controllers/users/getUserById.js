
import { db } from "../../db";
const { User, Booking, Review } = db;

export default async (id) => {
  const user = await User.findByPk(id,{
    include:[{
      model: Booking,
      as: 'booking',
    },
    {
      model: Review,
      as:'review'
    }
  ]

  })
  return user;
};
