const { request, response } = require("express");
const ProductOption = require("../../models/ProductOption");
const ProductAll = require("../../models/ProductAll");

const OptionCreateValidation = async (request, response, next) =>{
    let id = request.body.product_id
    let idProd = await ProductAll.findByPk(id)
    if(isNaN(id)){
        return response.status(400).json({
            message:"coloque um numero como id do produto"
        })
    }else{
    if(idProd == null){
        return response.status(404).json({
            message: "produto não encontrado"
        })
    }}
    if(!request.body.title || !request.body.values){
        return response.status(400).json({
            message: "os campos title e values são obrigatórios"
        })
    }else{
        if(typeof request.body.title != 'string' || typeof request.body.values != 'string'){
            return response.status(400).json({
                message: "os campos title e values só aceitam valores do tipo string"
            })
        }
    }
    if(isNaN(request.body.radius)){
        return response.status(400).json({
            message: "o campo radius so aceita números"
        })
    }
    
    next()    
}   
module.exports = OptionCreateValidation                          