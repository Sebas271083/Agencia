import express from "express";
import { paginaInicio, 
        paginaNosotros, 
        paginaViajes, 
        paginatestimoniales, 
        paginaDetalleViaje } from "../controllers/paginasController.js";
import { guardartestimonial } from "../controllers/testimoniaCotroller.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros )
router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaDetalleViaje)


router.get('/testimoniales', paginatestimoniales);
router.post('/testimoniales', guardartestimonial);


export default router;