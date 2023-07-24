const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Sport = sequelize.define('Sport', {
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
            type: DataTypes.STRING,
        }
    })
    return Sport;
}