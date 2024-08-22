

const CategoriaModels = require('../models/CategoriaModel');

const CategoryController = {
     create(request, response){
        CategoriaModels.create(request.body);
        response.json({
            message:"category criado com sucesso"
        })
    },
    async list(request,response){
        const category = await CategoriaModels.findAll();
        response.json(category);
    },
    async listarUma(request, response) {
        let id = request.params.id;
        const Categoria = await CategoriaModels.findOne({
            where:{
                id:id
            }
        })
        return response.json(Categoria)
    },

    async update(request, response){
        let id = request.params.id;
        CategoriaModels.update(request.body,{
            where:{ id }
        })
        return response.json({
            message: "categoria atualizado"
        })
    },
    async delete(request, response){
        let id = request.params.id;
        CategoriaModels.destroy({
            where:{ id }
        });

        return response.json({
            message: "categoria deletado"
        })
    }

}

module.exports = CategoryController