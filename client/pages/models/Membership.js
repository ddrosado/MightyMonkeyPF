const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Membership = sequelize.define("Membership", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      isActive:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
      },
      
    });
    return Membership;
}