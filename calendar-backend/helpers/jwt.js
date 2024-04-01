const jwt = require('jsonwebtoken');
require('dotenv').config();

const generarJWT = (uid, name) => {

    const payload = {uid, name};
    const token = jwt.sign(payload, process.env.SECRET_JWT_SEED, {
        expiresIn: '2h'
    });
    
    if (!token) {
        return 'No se pudo generar eñl token'
    }

    return token;
}

module.exports = {
    generarJWT
}