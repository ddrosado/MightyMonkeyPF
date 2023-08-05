const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Plan = sequelize.define("Plan", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      price:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
    return Plan;
}