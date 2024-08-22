const ProductOption = require("../../models/ProductOption");


const OptionPut_Delete = async (request, response, next) => {
    let id = request.params.id;
    let idreq = await ProductOption.findByPk(id)

    if(idreq == null ){
        console.log(idreq)
        return response.status(404).json({
            message: "option não encontrado"
        })
    }

    next();
}

module.exports = OptionPut_Delete