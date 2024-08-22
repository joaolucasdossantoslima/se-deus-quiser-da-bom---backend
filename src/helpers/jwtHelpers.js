require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateJwt(idUser) {
    const payload = {
        id: idUser
    }
    const options = {
        expiresIn: '24h'
    };
    
    const token = jwt.sign(payload, process.env.JWT_SECRET, options);
    
    return token;
}

module.exports = generateJwt;