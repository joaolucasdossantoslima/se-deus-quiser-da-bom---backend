const jwt = require('jsonwebtoken');

function verifyJwtMiddleware(req, res, next) {
    const authorization = req.headers.authorization || '';
    const token = authorization.split(' ')[1];

    if(!token) {
        return res.status(400).json({
            message: "token não fornecido!"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next(); 
    } catch (error) {
        console.log(error.message);

        return res.status(403).json({
            message: "Usuário não autorizado"
        });
    }
}

module.exports = verifyJwtMiddleware;