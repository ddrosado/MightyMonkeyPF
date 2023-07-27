import { db } from "../../db";
const { User, Review, Court } = db;


export default async () => {
  try {
    const allUsers = await User.findAll({
      include: [
        {
          model: Review, // Incluir el modelo Review en la consulta
          include: [Court], // Incluir el modelo Court para obtener el nombre de la cancha
        },
      ],
    });

    // Mapear los usuarios y agregar las reviews asociadas a cada usuario
    const usersWithReviews = allUsers.map((user) => {
      const { id, name, email } = user; // Obtener propiedades del usuario
      const reviews = user.Reviews.map((review) => {
        const { id: reviewId, comment } = review; // Obtener propiedades de la review
        const courtName = review.Court ? review.Court.name : 'Cancha no encontrada'; // Obtener el nombre de la cancha (si está disponible)

        return {
          reviewId,
          comment,
          courtName,
          // Otras propiedades relevantes de la review que desees incluir
        };
      });

      return {
        id,
        name,
        email,
        reviews, // Agregar las reviews al objeto del usuario
      };
    });

    return usersWithReviews;
  } catch (error) {
    console.error('Error al obtener los usuarios y sus reviews:', error);
    throw error;
  }
};
