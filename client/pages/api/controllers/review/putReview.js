import { db } from "../../db";
const { Review } = db;

export default async (review) => {
  const updatedReview = await Review.update(review, {
    where: {
      id: review.id,
    },
  });
  return updatedReview
};
