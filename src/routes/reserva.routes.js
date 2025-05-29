const { Router } = require("express");

const routerReserva = Router();


const { obtenerReservas, obtenerReservaPorId } = require("../controllers/reserva/getReservas");

const { crearReserva } = require("../controllers/reserva/createReserva")

routerReserva.get("/getGuias", obtenerReservas);
routerReserva.get("/getGuias/:id", obtenerReservaPorId)

routerReserva.post("/crearReserva", crearReserva);

module.exports = routerReserva;

