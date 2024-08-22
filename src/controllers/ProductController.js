const ProductAll = require('../models/ProductAll');
const ProductImage = require('../models/ProductImage');
const ProductOption = require('../models/ProductOption');

const ProductContoller = {
    
    async create(request, response){
        ProductAll.create(request.body);
        return response.status(201).json({
            message: "produto cadastrado"
        })
      },

    async list(request, response){
        ProductAll.hasMany(ProductImage,{foreignKey: 'product_id'})
        ProductAll.hasMany(ProductOption,{foreignKey: 'product_id'})
        let productsList = await ProductAll.findAll({
            include:[ProductImage, ProductOption]
        });
        return response.json(productsList)
    },
    async listarUma(request, response) {
        let id = request.params.id;
        const Product = await ProductAll.findOne({
            where:{
                id:id
            }
        })
        return response.json(Product)
    },
    async update(request, response){
        let id = request.params.id;

        ProductAll.update(request.body, {
            where:{ id }
        })
        return response.json({
            message: "produto atualizado"
        })
    },

    async delete(request, response){
        let id = request.params.id;

        ProductAll.destroy({
            where:{ id }
        });

        return response.json({
            message: "produto deletado"
        })
    }
}

module.exports = ProductContoller

