const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const turistaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    numeroTelefono: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    idiomasHablados: {
        type: String,
        required: true,
        enum: [
            "Ingles",
            "Español",
            "Portugues ",
            "Frances",
            "Aleman",
            "Mandarin",
            "Japones"
        ]
    },
    Nacionalidad: {
        type: String,
        required: true,

    }


}, {
    timestamps: true,
})

module.exports = mongoose.model("Turista", turistaSchema);