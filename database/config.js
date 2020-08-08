// config de mongose
const mongoose = require('mongoose');


const dbConnection = async() => {

    try {

        await mongoose.connect('mongodb://localhost:27017/calculadoradb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('Base de Datos Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la Base de Datos');
    }

};


module.exports = {
    dbConnection
};