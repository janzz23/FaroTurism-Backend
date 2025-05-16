const Guia = require("../../models/Guia");

const deleteGuia = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteGuia = await Guia.findByIdAndDelete(id);
        if (!deleteGuia) {
            return res.status(404).json({ message: "Guia no encontrado" });
        }
        res.status(200).json({ message: "Guia eliminado correctamente" });

    } catch (error) {

        console.error("Error al eliminar al Guia:", error);
        res.status(500).json({ message: "Error al eliminar  al Guia" });
    }
}

module.exports = {
    deleteGuia
}
