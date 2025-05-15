const Turista = require("../../models/turista")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { generarToken } = require("../../libs/jwt/jwt")

const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const turista = await Turista.findOne({ email });

        if (!turista) {
            return res.status(404).json({ message: "El email no está registrado" });
        }

        const passwordValido = await bcrypt.compare(password, turista.password);
        if (!passwordValido) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }
        const token = await generarToken({ id: turista._id })

        res.status(200).json({
            token: token,
            message: "Inicio de sesión exitoso",
            id: turista._id,
            nombre: turista.nombre,
            apellido: turista.apellido,
            numeroTelefono: turista.numeroTelefono,
            email: turista.email,
            idiomasHablados: turista.idiomasHablados,
            nacionalidad: turista.nacionalidad,
        });

    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ message: "Error al iniciar sesión" });
    }

}

