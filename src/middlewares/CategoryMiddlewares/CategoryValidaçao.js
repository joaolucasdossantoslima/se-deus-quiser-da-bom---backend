const { request, response } = require('express')
const CategoriaModel = require('../../models/CategoriaModel')


const CategoryValidaçao = async(request, response, next)=>{
    if(!request.body.name ){
        response.status(400).json({
            messege:"nomes é obrigatorio"
        })
    }
    if(!request.body.slug){
        return response.status(400).json({
            message: "o slug é obrigatorio"
        })
    }
    if(typeof request.body.name != 'string' || typeof request.body.slug != 'string'){
        return response.status(400).json({
            message : "o nome e slug so aceitam dados do tipo sting"
        })
    }
    if(isNaN(request.body.use_in_menu)){
        return response.status(400).json({
            message : "coloque os valores boolean 1 ou 0"
        })
    }
    
     next()

}


module.exports = CategoryValidaçao