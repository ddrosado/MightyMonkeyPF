import getPlans from "../controllers/plans/getPlans";
import postPlans from "../controllers/plans/postPlans";
import putPlans from "../controllers/plans/putPlans";

export default async (req, res) => {
    const { method, body } = req;
    try {
      if (method === "GET") {
        const plans = await getPlans();
        return res.status(200).json(plans);
      }
      if (method === "POST") {
        const { name, price, description, duration } = body;
        if (!name || !price || !description || !duration) throw Error("missing data");
        const plan = await postPlans(body);
        return res.status(200).json(plan);
    }
      if (method === "PUT") {
        const { id } = body;
        if (!id) throw Error("missing id");
        const plan = await putPlans(body);
        return res.status(200).json(plan);
      }
    //   if (method === "DELETE") {
    //     const { id } = body;
    //     if (!id) throw Error("missing id");
    //     const sport = await deleteSport(id);
    //     return res.status(200).json(sport);
    //   }
    } catch (error) {
      return res.status(400).json(error.message);
    }
  };