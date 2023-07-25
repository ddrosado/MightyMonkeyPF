const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   const User = sequelize.define("User", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image:{
        type: DataTypes.TEXT,
        allownull: true,
      },
      surname:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      telephone:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      isMember:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      isActive:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
      }
    });
    return User
}



