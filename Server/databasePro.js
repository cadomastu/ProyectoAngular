const mongoose = require('mongoose');

const URI = 'mongodb://localhost/Productos'; //URL de la base de datos de productos

mongoose.connect(URI)
    .then(db => console.log('DataBase is connected')) //Si conecta correctamente mostrará un mensaje por consola
    .catch(err => console.error(err)); //Si no es asi mostrará un mensaje de error por consola
    
module.exports = mongoose; //Exporto la conexion