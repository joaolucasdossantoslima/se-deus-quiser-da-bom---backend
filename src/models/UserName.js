const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const UserName = connection.define('user', {
    
    firstname: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    
    surname: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    
    email: {
        type: DataTypes.STRING(225),
        allowNull: false,
        unique: true
    },
    
    password: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
});

module.exports = UserName;