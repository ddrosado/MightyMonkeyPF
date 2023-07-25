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
        image:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        courts: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
    })
    return Sport;
}