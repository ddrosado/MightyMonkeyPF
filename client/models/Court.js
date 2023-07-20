const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Court = sequelize.define("Court", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAvailable:{
        type: DataTypes.BOOLEAN,
      },
      NonMemberFee:{
        type: DataTypes.INTEGER,
      },
      memberFee:{
        type: DataTypes.INTEGER,
      }
    });
    return Court;
}


