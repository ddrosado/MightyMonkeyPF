
// import bcrypt from 'bcrypt'
import { db } from "../../db";

const {User} = db

export default async (info) => {
  try {
    // Verificar si el email ya está en uso
    const existEmail = await User.findOne({
      where: {
        email: info.email,
      },
    });

    if (!existEmail) {
      // Crear un nuevo usuario con la propiedad isActive en true por defecto
      const newUser = await User.create({
        ...info,
        isActive: true,
      });

      return newUser;
    } else {
      throw new Error("This email is already in use");
    }
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante el proceso
    throw new Error("Error al crear el usuario: " + error.message);
  }
};
