const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("booking", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      date:{
        type: DataTypes.DATE,
        allowNull: false,
      },
      schedule: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration:{
        type: DataTypes.INTEGER,
      },
      
    });
}
