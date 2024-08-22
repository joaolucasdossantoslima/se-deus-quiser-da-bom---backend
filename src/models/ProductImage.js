const connection = require('../database/connection');
const { DataTypes } = require('sequelize');
const ProductAll = require('./ProductAll');


const ProductImage = connection.define('image-products',{
    
    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:ProductAll,
            key: 'id'

        },
        onDelete: 'cascade'
    },

    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },

    path:{
        type: DataTypes.STRING(255),
        allowNull: false
    }
})

module.exports = ProductImage