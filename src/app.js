const express = require('express');
const app = express();


const cors = require('cors');

// Habilita CORS (Cross-Origin Resource Sharing) para permitir
// peticiones desde el frontend alojado en http://localhost:8000
server.use(
    cors({
        origin: "http://localhost:4200", // Solo permite solicitudes desde esta URL
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./bd.js")(); // Conexión a la base de datos


module.exports = app; // Exporta la instancia de Express para su uso en otros módulos