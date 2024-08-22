const { request, response } = require("express");
const UserName = require("../../models/UserName");

const UserPut_DeleteValidadtion = async (request,response,next) => {
    let id = request.params.id;
    let idreq = await UserName.findByPk(id)

    if(idreq == null ){
        console.log(idreq)
        return response.status(404).json({
            message: "Usuario não encontrado"
        })
    }

    next();
}
module.exports = UserPut_DeleteValidadtion