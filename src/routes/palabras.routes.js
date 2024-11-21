import { Router } from "express";
import { authRequired } from "../middlewares/validarToken.js";
import { createPalabra, deletePalabra, getPalabra, getPalabras, updatePalabra } from "../controllers/palabras.controller.js";
import { validarParametros, validarPost } from "../middlewares/validarPalabras.js";

const router= Router()

router.get('/palhome', getPalabras);

router.get('/palabras', /*authRequired,*/ getPalabras);
router.get('/palabras/:id', /*authRequired,*/validarParametros, getPalabra );
router.post('/palabras', /*authRequired,*/ validarPost, createPalabra );
router.delete('/palabras/:id', /*authRequired,*/ validarParametros, deletePalabra );
router.put('/palabras/:id', /*authRequired,*/ validarParametros, updatePalabra);
//router.get('/diez', palabrasAlea);


export default router;
