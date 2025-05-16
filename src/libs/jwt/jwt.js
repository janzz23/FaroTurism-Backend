const jwt = require("jsonwebtoken");

require("dotenv").config();
const { JWT_SECRET } = process.env;

function generateToken(user) {
    return new Promise((resolve, reject) => {
        jwt.sign(user, JWT_SECRET , {
            expiresIn: 1000,
        },
            (err, token) => {
                if (err) reject(err); // Si hay un error, rechazamos la promesa
                resolve(token); // Si se genera correctamente, resolvemos la promesa con el token
            }

        )

    }

    )
}

module.exports = {
    generateToken
}