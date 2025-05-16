const Turista = require("../../models/Turista");

const bcrypt = require("bcrypt");
const putTurista = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            nombre,
            apellido,
            numeroTelefono,
            email,
            password,
            idiomasHablados,
            nacionalidad
        } = req.body;

        // Verificar si el número de teléfono ya está registrado por otro usuario
        const encontrarTuristaPorTelefono = await Turista.findOne({ numeroTelefono, _id: { $ne: id } });
        if (encontrarTuristaPorTelefono) {
            return res.status(400).json({ message: "El número de teléfono ya está registrado" });
        }

        // Verificar si el email ya está registrado por otro usuario
        const encontrarTuristaPorEmail = await Turista.findOne({ email, _id: { $ne: id } });
        if (encontrarTuristaPorEmail) {
            return res.status(400).json({ message: "El email ya está registrado" });
        }

        // Buscar el turista a actualizar
        const turista = await Turista.findById(id);
        if (!turista) {
            return res.status(404).json({ message: "Turista no encontrado" });
        }

        // Encriptar la contraseña solo si se envió una nueva
        let updatedPassword = undefined;
        if (password) {
            this.updatedPassword = await bcrypt.hash(password, 10);
        }

        const updateData = {
            nombre,
            apellido,
            numeroTelefono,
            email,
            password,
            idiomasHablados,
            nacionalidad
        }
        if (updatedPassword) {
            updateData.password = updatedPassword;
        }


        const turistaActualizado = await Turista.findByIdAndUpdate(id, updateData, { new: true });


        if (!turistaActualizado) {
            return res.status(404).json({ message: "Turista no encontrado" });
        }

        res.status(200).json({ message: "Turista actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el turista", error: error.message });
    }
}

module.exports = { putTurista };