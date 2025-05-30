const { Router } = require('express');

const authRouter = Router();

const { register } = require("../controllers/auth/register.controller");
const { login,
    logout,
    profile,
    verifyToken } = require("../controllers/auth/login.controller")

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

authRouter.get("/verify", verifyToken);

authRouter.get("/profile", profile);
module.exports = authRouter;

