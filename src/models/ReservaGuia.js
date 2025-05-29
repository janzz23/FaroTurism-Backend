const mongoose = require("mongoose");

const reservaGuiaSchema = new mongoose.Schema({
    turista: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Turista",
        required: true
    },
    guia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guia",
        required: true
    },
    fechaReserva: {
        type: Date,
        required: true
    },
    horaInicio: {
        type: String, // Formato: "HH:mm"
        required: true
    },
    duracionHoras: {
        type: Number,
        required: true
    },
    costoTotal: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        enum: ["pendiente", "confirmada", "cancelada", "completada"],
        default: "pendiente"
    },
    lugarEncuentro: {
        type: String,
        required: true
    },
    notasAdicionales: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("ReservaGuia", reservaGuiaSchema);
