const { request, response } = require("express");
const UserName = require("../../models/UserName");

const UserCreateValidation = async (request,response, next) =>{
    let email = request.body.email
    let user = await UserName.findOne({
        where: {email}
    })
    let emailReg = user ? user.email:""

    if(email == emailReg){
        return response.status(400).json({
            message: "Email cadastrado"
        })
    }
    
    next();
}
module.exports = UserCreateValidation