const Producto = require('../Models/producto');

const ProductoCtrl = {};

ProductoCtrl.getProductos = async (req, res)=> {
    //res.send('Petición get de los productos');
    /*res.json({
        status: 'Funcionando'
    });*/

   const productos = await Producto.find();
   res.json(productos);
        
}
ProductoCtrl.createProducto = async (req, res) =>{
    //console.log(req.body); Muestra los datos en consola pero no los guarda.
    res.json('Peticion post realizada')
}

ProductoCtrl.getProducto = function(){

}

ProductoCtrl.editProducto = function(){

}

ProductoCtrl.deleteProducto = function(){

}

module.exports = ProductoCtrl;