const { Schema, model } = require('mongoose');

const SesionSchema = Schema({

    operandos: {
        type: String,
        required: true
    },
    operacion: {
        type: String
    }

});

module.exports = model('Sesion', SesionSchema);