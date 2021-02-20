const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarritoSchema = new Schema({

    codUsuario: { type: String, required: true},
    codProducto: { type: String, required: true},
    cantidad: { type: Number, required: true}

});

module.exports = mongoose.model('Carrito', CarritoSchema);