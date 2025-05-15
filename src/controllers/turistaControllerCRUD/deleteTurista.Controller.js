
const Turista = require("../../models/turista");

const deleteTurista = async (req, res) => {

    try {
        const { id } = req.params;

        const turista = await Turista.findByIdAndDelete(id);
        if (!turista) {
            return res.status(404).json({ message: "Turista no encontrado" });
        }
        res.status(200).json({ message: "Turista eliminado correctamente" });

    } catch (error) {

        console.error("Error al eliminar el turista:", error);
        res.status(500).json({ message: "Error al eliminar el turista" });
    }
}