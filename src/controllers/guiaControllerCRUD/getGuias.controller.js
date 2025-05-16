const Guia = require("../../models/Guia")

const getGuias = async (req, res) => {
    try {
        const guias = await Guia.find();

        res.status(200).json({ guias: guias });
    } catch (error) {
        console.error("Error al obtener los guías:", error);
        res.status(500).json({ message: "Error al obtener los guías" });
    }
}

const getGuiaById = async (req, res) => {
    const { id } = req.params;
    try {
        const guia = await Guia.findById(id);

        if (!guia) {
            return res.status(404).json({ message: "Guía no encontrado" });
        }

        res.status(200).json({ guia: guia });
    } catch (error) {
        console.error("Error al obtener el guía:", error);
        res.status(500).json({ message: "Error al obtener el guía" });
    }
}

module.exports = {
    getGuias,
    getGuiaById
}