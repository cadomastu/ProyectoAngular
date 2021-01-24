const mongoose = require('mongoose');
const { Schema } = mongoose;

new Schema({
    nombre: { type: String, required: true},
    categoria: { type: String, required: true},
    descripcion: { type: String, required: true},
    precio: { type: Number, required: true},
    stock: { type: Number, required: true},
    Url: {type: String, required: true}
})