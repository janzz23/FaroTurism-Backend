
const Turista = require("../../models/Turista");

const getTuristas = async (req, res) => {

    try {

        const turistas = await Turista.find().select("-password"); //Excluir el campo password

        res.status(200).json({ turistas: turistas });
    } catch (error) {

        console.error("Error al obtener los turistas:", error);
        res.status(500).json({ message: "Error al obtener los turistas" });
    }
}

const getTuristaById = async (req, res) => {

    const { id } = req.params;
    try {

        const turista = await Turista.findById(id).select("-password"); //Excluir el campo password

        if (!turista) {
            return res.status(404).json({ message: "Turista no encontrado" });
        }

        res.status(200).json({ turista: turista });
    } catch (error) {
        console.error("Error al obtener el turista:", error);
        res.status(500).json({ message: "Error al obtener el turista" });
    }
}

module.exports = {
    getTuristas,
    getTuristaById
}