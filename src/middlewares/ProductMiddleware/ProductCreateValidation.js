const { request, response } = require("express");
const ProductAll = require("../../models/ProductAll");
const { FLOAT, STRING } = require("sequelize");

const ProductCreateValidation = async (request, response, next) => {
     if(!request.body.name ){
        return response.status(400).json({
            message: "o nome do produto é obrigatorio"
        })
    }

    if(!request.body.slug){
        return response.status(400).json({
            message: "o slug do produto é obrigatorio"
        })
    }

    if(!request.body.price){
        return response.status(400).json({
            message:"o preço do produto é obrigatorio"
        })
    }
    if(!request.body.price_witch_discount){
        return response.status(400).json({
            message:"o preço com desconto é obrigatorio"
        })
    }
    if(isNaN(request.body.price) || isNaN(request.body.price_witch_discount)){
        return response.status(400).json({
            message:"o campo price , price with discount so aceita numeros"
        })
    }
    if(typeof request.body.name != 'string' || typeof request.body.description != 'string' || typeof request.body.slug != 'string'){
      return response.status(400).json({
        message : "o campo name e description só aceita strings"
      })
    }
    if(request.body.stock === ""){
        return response.status(400).json({
            message : "preencha o campo stock corretamente"
        })
    }
    if(isNaN(request.body.enable) || isNaN(request.body.use_in_menu)){
        return response.status(400).json({
            message: "preencha os campos enable e use_in_menu com os valores booleanos 1 e 0"
        })
    }
    // sei que tem coisas estão errado mas estou cansado e não achei umasolução


    next();
}

module.exports = ProductCreateValidation