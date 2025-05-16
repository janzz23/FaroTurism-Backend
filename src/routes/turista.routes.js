const { Router } = require('express');

const turistaRouter = Router();

const { getTuristas, getTuristaById } = require("../controllers/turistaControllerCRUD/getTuristas.Controller");

turistaRouter.get("/getTuristas", getTuristas);

turistaRouter.get("/getTuristaById/:id", getTuristaById);



module.exports = turistaRouter;