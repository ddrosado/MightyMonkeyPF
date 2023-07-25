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
        allowNull: false,
      },
      image:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isAvailable:{
        type: DataTypes.BOOLEAN,
      },
      nonMemberPrice:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      memberPrice:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
    return Court;
}


