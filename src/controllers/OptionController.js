const ProductOption = require ('../models/ProductOption');


const OptionController = {
    create(request, response){
        ProductOption.create(request.body);
        response.status(201);
        return response.json({
            message: "option adicionado"
        })
    },
    async list(request,response){
        const option = await ProductOption.findAll();
        return response.json(option);
    },
    async listarUma(request, response) {
        let id = request.params.id;
        const option = await ProductOption.findOne({
            where:{
                id:id
            }
        })
        return response.json(option)
    },
    async update(requets, response){
        let id = requets.params.id
        await ProductOption.update(requets.body,{
            where:{
                id:id
            }
        })
        return response.json('option atualizada com sucesso')
    },

    async delete(request,response) {
        await ProductOption.destroy({})

        return response.json('Todos as option foram deletadas')

    },

    async deletaUma(request, response){
        let id = request.params.id;
        await ProductOption.destroy({
            where:{
                id:id
            }
        })

        return response.json('option deletada com sucesso')
    }
}

module.exports = OptionController
