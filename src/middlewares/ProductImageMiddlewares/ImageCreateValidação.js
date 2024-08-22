const { request, response } = require("express");
const ProductImage = require("../../models/ProductImage");
const ProductAll = require("../../models/ProductAll");

const ImageCreateValidação = async (request, response, next) =>{
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
    if(isNaN(request.body.enabled)){
        return response.status(400).json({
            message : "coloque um valor booleano 1 ou 0 em enabled"
        })
    }
    if(!request.body.path){
        return response.status(400).json({
            message:"o path da imagem é obrigatorio"
        });
    }
    

    next()
}
module.exports= ImageCreateValidação