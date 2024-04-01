const {response} = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const validarJWT = (req, res = response, next) => {
    // x-token
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            ms: 'No hay token en la peticion'
        })
    }

    try {

        const {uid, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = uid,
        req.name = name;
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            ms: 'Token no valido'
        })
    }

    next();
}

module.exports = {
    validarJWT
}