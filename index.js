const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// crear el servidor express
const app = express();

// config CORS
app.use(cors());


// lectura y parseo del body
app.use(express.json());


// base de datos
dbConnection();



// rutas
app.use('/api/sesiones', require('./routes/sesiones'));




app.listen(3000, () => {
    console.log('servidor corriendo en el puerto ' + 3000);
});