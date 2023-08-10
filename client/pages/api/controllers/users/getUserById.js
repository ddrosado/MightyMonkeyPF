
import { db } from "../../db";
const { User, Booking, Review, Sport, Court } = db;

export default async (id) => {
  const user = await User.findByPk(id,{
    include:[{
      model: Booking,
      as: 'booking',
      include: [{
        model: Court,
        as: 'court',
        include: [{
          model: Sport,
          as: 'sport'
        }]
      }],
    },
    {
      model: Review,
      as:'review'
    }
  ]

  })
  return user;
};
