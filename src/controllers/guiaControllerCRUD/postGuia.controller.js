const Guia = require("../../models/Guia");


const postGuia = async (req, res) => {
    const {
        nombre,
        apellido,
        identificacion,
        numeroContacto,
        lugarOperacion,
        descripcion,
        conocimientos,
        especialidades,
        idiomasHablados,
        fotoPerfil, // URL o base64
        costoHora,
        beneficiosAdicionales } = req.body;

    try {

        /*
  identificacion: { type: String, required: true, unique: true },
    numeroContacto: { type: String, required: true, unique: true },
*/
        const encontrarGuiaPorIdentificacion = await Guia.findOne({ identificacion });
        const encontrarGuiaPorNumeroContacto = await Guia.findOne({ numeroContacto });

        if (encontrarGuiaPorIdentificacion) {
            return res.status(400).json({ message: "El identificacion registrada" });
        }

        if (encontrarGuiaPorNumeroContacto) {
            return res.status(400).json({ message: "numero de contando ya registrado" });
        }

        const nuevoGuia = new Guia({
            nombre,
            apellido,
            identificacion,
            numeroContacto,
            lugarOperacion,
            descripcion,
            conocimientos,
            especialidades,
            idiomasHablados,
            fotoPerfil, // URL o base64
            costoHora,
            beneficiosAdicionale
        })

        const guiaGuardado = nuevoGuia.save();

        res.status(201).json({

            message: "Guia registrado correctamente",
            turista: nuevoGuia,
        });
    } catch (error) {
        console.error("Error al registrar al Guia:", error);
        res.status(500).json({ message: "Error al registrar al Guia" });
    }
}

module.exports = { postGuia };