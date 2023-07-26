import { db } from "../../db";
const { Review } = db;


export default async (reviewId) => {
    try {
        const existingReview = await Review.findOne({
            where: {
                id: reviewId.id,
            },
        });

        if (existingReview) {
            existingReview.isDeleted = true;
            await existingReview.save();
            return "Comment Deleted";
        } else {
            throw new Error("La review no existe en la base de datos");
        }
    } catch (error) {
        throw new Error("Error al actualizar la review en la base de datos: " + error.message);
    }
};
