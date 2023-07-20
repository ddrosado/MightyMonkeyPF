const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("review", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      comment:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
    });
}

