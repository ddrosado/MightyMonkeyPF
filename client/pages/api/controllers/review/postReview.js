const { db } = require("../../db");
db.sequelize.sync();
const { Review, User } = db;

export default async (review) => {
  const { id } = await Review.create(review);
  const postedReview = await Review.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: User,
        as: "user",
        attributes: ["name", "surname", "image", "isMember"],
      },
    ],
  });
  return postedReview;
};
