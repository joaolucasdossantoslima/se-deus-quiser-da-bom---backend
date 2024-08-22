const connection = require('../database/connection');
const { DataTypes } = require('sequelize');
const ProductAll = require('./ProductAll');

const ProductOption = connection.define('option-product',{

    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:ProductAll,
            key: 'id'

        },
        onDelete: 'cascade'
    },

    title:{
        type: DataTypes.STRING(255),
        allowNull: false
    },

    shape:{
        type: DataTypes.ENUM('square', 'circle'),
        defaultValue: 'square'
    },

    radius:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    type:{
        type: DataTypes.ENUM('text', 'color'),
        defaultValue: 'text'
    },

    values:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
})

module.exports = ProductOption