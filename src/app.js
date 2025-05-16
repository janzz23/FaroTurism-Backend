const express = require('express');
const app = express();
const cors = require('cors');

const authRouter = require("./routes/auth.routes.js")

const turistaRouter = require("./routes/turista.routes.js")



app.use(
    cors({
        origin: "http://localhost:4200", // Solo permite solicitudes desde esta URL
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/app", authRouter); // Ruta para la autenticación
app.use("/app", turistaRouter )
require("./bd.js"); // Conexión a la base de datos


module.exports = app; // Exporta la instancia de Express para su uso en otros módulos