const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Subscrition = sequelize.define('Subscription', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })
    return Subscrition;
}