// Eliminar una reserva
const ReservaGuia = require("../../models/ReservaGuia");

exports.eliminarReserva = async (req, res) => {
    try {
        const reserva = await ReservaGuia.findByIdAndDelete(req.params.id);
        if (!reserva) return res.status(404).json({ mensaje: "Reserva no encontrada" });
        res.json({ mensaje: "Reserva eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
