const Sesion = require('../models/sesion');



const getSesiones = async(req, res) => {

    const sesiones = await Sesion.find();

    res.json({
        ok: true,
        msg: 'Obteniendo sesiones de calculo!',
        sesiones: sesiones
    });

};



const crearSesion = async(req, res) => {

    const { operandos, operacion } = req.body;

    const sesion = new Sesion(req.body);

    await sesion.save();

    res.json({
        ok: true,
        msg: 'creando sesion de calculo!',
        sesion: sesion

    });

};




module.exports = {
    getSesiones,
    crearSesion
};