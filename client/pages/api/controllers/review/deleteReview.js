import { db } from "../../db";
const { Review } = db;


export default async (id) => {
        const existingReview = await Review.destroy({
            where: {
                id: id,
            },
        });
        if(!existingReview) throw Error ('Review unnfound')
        return "review deleted"
};
