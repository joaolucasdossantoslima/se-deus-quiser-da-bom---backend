const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const CategoriaModel = connection.define('category',{

    name:{
        type: DataTypes.STRING(225),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    use_in_menu:{
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }

})

module.exports = CategoriaModel