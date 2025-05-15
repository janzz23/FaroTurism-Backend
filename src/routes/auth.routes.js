const { Router } = require('express');

const authRouter = Router();

const { register } = require("../controllers/auth/register.controller");
const { login } = require("../controllers/auth/login.controller")

authRouter.post("/register", register);
authRouter.post("/login", login);

module.exports = authRouter;

