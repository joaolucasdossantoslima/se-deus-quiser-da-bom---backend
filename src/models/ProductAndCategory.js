const connection = require('../database/connection');
const { DataTypes } = require('sequelize');
const ProductAll = require('./ProductAll');
const CategoriaModel = require('./CategoriaModel');

const ProductAndCategory = connection.define('category-and-product', {

    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:ProductAll,
            key: 'id'

        },
        onDelete: 'cascade'
    },
    Category_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:CategoriaModel,
            key: 'id'

        },
        onDelete: 'cascade'
    }
})

module.exports = ProductAndCategory