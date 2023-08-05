import { db } from "../../db";
db.sequelize.sync();
const { User, Booking, Review, Plan } = db;

export default async () => {
  const allUsers = await User.findAll({
    attributes: [ 'id', 'name', 'image', 'surname', 'email', 'telephone', 'password', 'isAdmin', 'isActive', 'isMember', 'memberId' ],
    include: [
      {
        model: Booking,
        as: 'booking',
        attributes: [ 'date', 'hour' ]
      },
      {
        model: Review,
        as: 'review',
        attributes: [ 'comment', 'rating' ]
      },{
        model: Plan,
        as: 'plan',
        attributes: [ 'name', 'price', 'duration' ]
      },
    ]
  });
  return allUsers;
};
