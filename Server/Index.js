const express = require('express');
const morgan = require('morgan');
const app = express(); //Contiene toda la funcionalidad del servidor.

const { mongoose } = require ('./databasePro'); //Requiero la conexion a la base de datos

//Setting
//Sección de configuración del servidor

app.set('port', process.env.PORT || 3000); //Variable llamada port con valor el puerto que facilita el SO o en su defect el 3000


// Middlewares
// Funciones que ayudan a procesar los datos

app.use(morgan('dev')); // app.use Ejecuta funciones 
app.use(express.json()); //Permite al servidor los formatos json a traves de req.body

//Routes
//Rutas del servidor

app.use('/api/productos',require('./Routes/producto.routes'));


//Startinf the server
//Se encarga de inicializar el servidor
app.listen(app.get('port'), () =>{
    console.log('Server on port ', app.get('port'));
});