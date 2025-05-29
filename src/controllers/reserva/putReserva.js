// Actualizar una reserva
const ReservaGuia = require("../../models/ReservaGuia");

exports.actualizarReserva = async (req, res) => {
    try {
        const reserva = await ReservaGuia.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reserva) return res.status(404).json({ mensaje: "Reserva no encontrada" });
        res.json(reserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};