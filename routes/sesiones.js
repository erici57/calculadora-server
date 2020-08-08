/*
        Ruta: api/sesiones
*/


const { Router } = require('express');
const { getSesiones, crearSesion } = require('../controllers/sesiones');

const router = Router();

// obtener sesiones de calculo
router.get('/', getSesiones);

//guardar sesion de calculo
router.post('/', crearSesion);





module.exports = router;