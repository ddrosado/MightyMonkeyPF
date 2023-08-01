const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Booking = sequelize.define("Booking", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      hour: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    });
    return Booking;
}
