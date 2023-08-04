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
        type: DataTypes.ENUM,
        values: ['1','2','3','4','5']
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      }
    });
    return Review;
}

