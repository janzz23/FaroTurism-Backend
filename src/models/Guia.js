const { mongoose } = require("mongoose");
const moongose = require("mongoose");

const guiaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    identificacion: { type: String, required: true, unique: true },
    numeroContacto: { type: String, required: true, unique: true },
    lugarOperacion: { type: String, required: true },
    descripcion: { type: String, required: true },
    conocimientos: [{ type: String, required: true }],
    especialidades: [{ type: String, required: true }],
    idiomasHablados: [{
        type: String,
        required: true,
        enum: [
            "Ingles",
            "Español",
            "Portugues",
            "Frances",
            "Aleman",
            "Mandarin",
            "Japones"
        ]
    }],
    fotoPerfil: { type: String }, // URL o base64
    costoHora: { type: Number, required: true },
    beneficiosAdicionales: [{ type: String }]
}, {
    timestamps: true,
});

module.exports = mongoose.model("Guia", guiaSchema);