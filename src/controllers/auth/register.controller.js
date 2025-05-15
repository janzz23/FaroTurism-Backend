const Turista = require("../../models/turista")

const bcrypt = require("bcrypt");


const register = async (req, res) => {

    const { nombre,
        apellido,
        numeroTelefono,
        email,
        password,
        idiomasHablados,
        nacionalidad
    } = req.body;


    try {
        const encontrarTuristaPorTelefono = await Turista.findOne({ numeroTelefono });

        if (encontrarTuristaPorTelefono) {
            return res.status(400).json({ message: "El número de teléfono ya está registrado" });
        }

        const encontrarTuristaPorEmail = await Turista.findOne({ email });
        if (encontrarTuristaPorEmail) {
            return res.status(400).json({ message: "El email ya está registrado" });
        }

        const passowordHash = await bcrypt.hash(password, 10);

        const nuevoTurista = new Turista({
            nombre,
            apellido,
            numeroTelefono,
            email,
            password: passowordHash,
            idiomasHablados,
            nacionalidad
        })

        const turistaGuardado = await nuevoTurista.save();

        res.status(201).json({
            message: "Turista registrado correctamente",
            turista: {
                id: turistaGuardado._id,
                nombre: turistaGuardado.nombre,
                apellido: turistaGuardado.apellido,
                numeroTelefono: turistaGuardado.numeroTelefono,
                email: turistaGuardado.email,
                idiomasHablados: turistaGuardado.idiomasHablados,
                nacionalidad: turistaGuardado.nacionalidad
            }
        });
    } catch (error) {
        console.error("Error al registrar el turista:", error);
        res.status(500).json({ message: "Error al registrar el turista" });
    }

}


module.exports = {
    register
}