const { Router } = require("express");

const guiaRoutes = Router();

const { getGuias, getGuiaById } = require("../controllers/guiaControllerCRUD/getGuias.controller");
const { deleteGuia } = require("../controllers/guiaControllerCRUD/deleteGuia.controller")

const { postGuia } = require("../controllers/guiaControllerCRUD/postGuia.controller")

guiaRoutes.get("/getGuias", getGuias)
guiaRoutes.get("/getGuiaById/:id", getGuiaById)

guiaRoutes.delete("/deleteGuia/:id", deleteGuia)
guiaRoutes.post("/postGuia", postGuia)

module.exports = guiaRoutes;