const { Router } = require('express');

const turistaRouter = Router();

const { getTuristas, getTuristaById } = require("../controllers/turistaControllerCRUD/getTuristas.Controller");

const { deleteTurista } = require("../controllers/turistaControllerCRUD/deleteTurista.Controller")

const { putTurista } = require("../controllers/turistaControllerCRUD/putTurista.Controller")
turistaRouter.get("/getTuristas", getTuristas);

turistaRouter.get("/getTuristaById/:id", getTuristaById);
turistaRouter.delete("/deleteTurista/:id", deleteTurista);
turistaRouter.put("/updateTurista/:id", putTurista);

module.exports = turistaRouter;