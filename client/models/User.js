const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   sequelize.define("user", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin:{
        type: DataTypes.BOOLEAN,
      }
    });
}



