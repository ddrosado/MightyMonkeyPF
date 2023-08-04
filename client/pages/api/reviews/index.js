import postReview from "../controllers/review/postReview";
import getReview from "../controllers/review/getReview";
import deleteReview from "../controllers/review/deleteReview";
import putReview from "../controllers/review/putReview";

export default async ({ body, method }, res) => {
  try {
    if (method === "POST") {
      const { comment, rating, userId } = body;
      if (comment.length < 10) throw Error("Comment is too short");
      if(rating > 5 || rating < 1) throw Error('Rating value min 1 max 5')
      if (!comment || !rating || !userId) throw Error("Missing Data");
      const reviews = await postReview(body);
      return res.status(200).json(reviews);
    }
    if (method === "GET") {
      const review = await getReview();
      return res.status(200).json(review);
    }
    if (method === "PUT") {
      if (!body.id) throw Error("Missing Id");
      const review = await putReview(body);
      return res.status(200).json(review);
    }
    if (method === "DELETE") {
      const { id } = req.body;
      if (!id) throw Error("Missing Id");
      await deleteReview(id);
      return res.status(200).json("review deleted");
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
