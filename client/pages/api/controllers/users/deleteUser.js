import { db } from "../../db";
const { User } = db;


export default async (info, propertyToCompare = "name") => {
    try {
    const validProperties = ["name", "email", "id"]; 
    if (!validProperties.includes(propertyToCompare)) {
        throw new Error("Propiedad de comparación no válida");
    }
    const existingUser = await User.findOne({
        where: {
        [propertyToCompare]: info[propertyToCompare],
        },
    });
    if (existingUser) {
        const modifiedProperties = Object.keys(info);
        if (modifiedProperties.length === 1 && modifiedProperties.includes("isActive")) {
        existingUser.isActive = info.isActive;
        await existingUser.save();
        return existingUser;
        } else {
        if (info.isActive !== undefined) {
            existingUser.isActive = info.isActive;
        } else {
            existingUser.isActive = false;
        }
        await existingUser.save();
        return existingUser;
        }
    } else {
        throw new Error("El usuario no existe en la base de datos");
    }
    } catch (error) {
        throw new Error("Error al actualizar el usuario en la base de datos: " + error.message);
    }
};
