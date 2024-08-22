const ProductImage = require("../../models/ProductImage");

const ImagePut_Delete = async (request, response, next) => {
    let id = request.params.id;
    let idreq = await ProductImage.findByPk(id)

    if(idreq == null ){
        console.log(idreq)
        return response.status(404).json({
            message: "imagem não encontrado"
        })
    }

    next();
}

module.exports = ImagePut_Delete