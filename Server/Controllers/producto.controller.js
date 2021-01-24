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
    const producto = new Producto(req.body);
    await producto.save(); //Guarda el producto en la base de datos, utilizamos await porque la peticion puede llevar algo de tiempo
    //console.log(req.body); Muestra los datos en consola pero no los guarda.
    res.json({
        'status': 'Producto añadido'
    });
}

ProductoCtrl.getProducto = async (req, res) => {
    //console.log(req.params);
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
};

ProductoCtrl.editProducto = async (req, res) => {
    const { id } = req.params;
    const producto = {
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        Url: req.body.Url
    };
    await Producto.findByIdAndUpdate(id, {$set: producto}, {new:true}); //Si no existe el producto lo crea (new:true)
    res.json({status:'Producto actualizado'});
};

ProductoCtrl.deleteProducto = async(req, res) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status: "Producto eliminado"});
};

module.exports = ProductoCtrl;