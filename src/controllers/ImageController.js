const ProductImage = require('../models/ProductImage');

const ImageController = {
    create(request, response){
        ProductImage.create(request.body);
        response.status(201);
        return response.json({
            message: "imagem adicionada"
        })
    },
    async list(request, response){
        const images = await ProductImage.findAll();
        return response.json(images);
    },
    async listarUma(request, response) {
        let id = request.params.id;
        const image = await ProductImage.findOne({
            where:{
                id:id
            }
        })
        return response.json(image)
    },
    async update(requets, response){
        let id = requets.params.id
        await ImagesModel.update(requets.body,{
            where:{
                id:id
            }
        })
        return response.json('Imagem atualizada com sucesso')
    },

    async delete(request,response) {
        await ImagesModel.destroy({})

        return response.json('Todos as imagens foram deletadas')

    },

    async deletaUma(request, response){
        let id = request.params.id;
        await ImagesModel.destroy({
            where:{
                id:id
            }
        })

        return response.json('Imagem deletada com sucesso')
    }
}

module.exports = ImageController