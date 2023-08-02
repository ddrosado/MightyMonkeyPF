import { db } from "../../db";
const { User } = db;


export default async (info, propertyToCompare = "email") => {

  try {
    // Verificar si se proporciona una propiedad válida para comparar
    const validProperties = ["name", "email", "id"]; // Lista de propiedades válidas para comparar

    if (!validProperties.includes(propertyToCompare)) {
      throw new Error("Propiedad de comparación no válida");
    }

    // Buscar si el usuario ya existe en la base de datos utilizando la propiedad especificada
    const existingUser = await User.findOne({
      where: {
        [propertyToCompare]: info[propertyToCompare],
      },
    });

    if (existingUser) {
      // Si el usuario existe, actualiza sus datos con la información proporcionada
      await existingUser.update(info);
      return existingUser;
    } else {
      // Si el usuario no existe, lanza un error indicando que no se puede actualizar
      throw new Error("El usuario no existe en la base de datos");
    }
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante el proceso
    throw new Error("Error al actualizar el usuario en la base de datos: " + error.message);
  }
};
