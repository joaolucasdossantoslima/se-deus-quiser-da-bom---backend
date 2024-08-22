const { request, response } = require("express");
const CategoriaModel = require("../../models/CategoriaModel");

const CategoryPut_DeleteValidation = async(request,response,next)=> {
    let id = request.params.id;
    let idreq = await CategoriaModel.findByPk(id)

    if(idreq == null ){
        console.log(idreq)
        return response.status(404).json({
            message: "Categoria não encontrada"
        })
    }

    next();
}

module.exports = CategoryPut_DeleteValidation