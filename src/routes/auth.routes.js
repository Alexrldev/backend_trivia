import { Router } from "express";
import { form } from "../controllers/register.controller.js";
import { registroUsu, login, logout, verifyToken } from "../controllers/login.controller.js";
import { authRequired } from "../middlewares/validarToken.js";

const router=Router();

//router.get('/form', authRequired, form);
//router.post('/registro', registroUsu);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verify', verifyToken);


export default router;