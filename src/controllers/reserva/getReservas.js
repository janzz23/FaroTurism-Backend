const ReservaGuia = require("../../models/ReservaGuia");


const obtenerReservas = async (req, res) => {
    try {
        const reservas = await ReservaGuia.find()
            .populate("turista", "nombre apellido")
            .populate("guia", "nombre apellido");
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener una reserva por ID
const obtenerReservaPorId = async (req, res) => {
    try {
        const reserva = await ReservaGuia.findById(req.params.id)
            .populate("turista", "nombre apellido")
            .populate("guia", "nombre apellido");
        if (!reserva) return res.status(404).json({ mensaje: "Reserva no encontrada" });
        res.json(reserva);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { obtenerReservas, obtenerReservaPorId }