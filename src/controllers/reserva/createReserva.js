const ReservaGuia = require("../../models/ReservaGuia");
const Guia = require("../../models/Guia");

exports.crearReserva = async (req, res) => {
    try {
        const {
            turista,
            guia,
            fechaReserva,
            horaInicio,
            duracionHoras,
            estado,
            lugarEncuentro,
            notasAdicionales
        } = req.body;

        // Buscar el guía por su ID
        const guiaEncontrado = await Guia.findById(guia);
        if (!guiaEncontrado) {
            return res.status(404).json({ error: "Guía no encontrado" });
        }

        console.log(guiaEncontrado)
        // Calcular costoTotal automáticamente
        const costoTotal = guiaEncontrado.costoHora * duracionHoras;

        // Crear y guardar la nueva reserva
        const nuevaReserva = new ReservaGuia({
            turista,
            guia,
            fechaReserva,
            horaInicio,
            duracionHoras,
            costoTotal,
            estado, // opcional, si no se envía, tomará el valor por defecto: "pendiente"
            lugarEncuentro,
            notasAdicionales
        });

        const reservaGuardada = await nuevaReserva.save();

        // Puedes devolver solo la reserva o también incluir información del guía
        res.status(201).json({
            mensaje: "Reserva creada correctamente",
            reserva: reservaGuardada,
            costoHoraGuia: guiaEncontrado.costoHora
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
