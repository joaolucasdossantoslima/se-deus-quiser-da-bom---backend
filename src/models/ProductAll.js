const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const ProductAll = connection.define('shoes', {  
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },

    name: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    
    slug: {
        type: DataTypes.STRING(225),
        allowNull: false
    },

    use_in_menu: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },

    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    description: {
        type: DataTypes.STRING(225),
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    price_witch_discount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

});

module.exports = ProductAll;
