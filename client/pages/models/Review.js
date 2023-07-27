const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Review = sequelize.define("Review", {
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
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    });
    return Review;
}

