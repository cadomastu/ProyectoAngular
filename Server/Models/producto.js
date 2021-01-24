const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: { type: String, required: true},
    categoria: { type: String, required: true},
    descripcion: { type: String, required: true},
    precio: { type: Number, required: true},
    stock: { type: Number, required: true},
    Url: {type: String, required: true}
});

module.exports = mongoose.model('Producto', ProductoSchema);