
const ProductAll = require("../../models/ProductAll");

const ProductUpdate_DeleteValidation = async (request, response, next) => {
    let id = request.params.id;
    let idreq = await ProductAll.findByPk(id)

    if(idreq == null ){
        console.log(idreq)
        return response.status(404).json({
            message: "produto não encontrado"
        })
    }

    next();
}

module.exports = ProductUpdate_DeleteValidation