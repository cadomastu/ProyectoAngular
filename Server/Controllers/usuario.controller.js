const Usuario = require('../Models/usuario');

const UsuarioCtrl = {};

UsuarioCtrl.getUsuarios = async (req, res)=> {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

UsuarioCtrl.createUsuario = async (req, res) =>{
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({
        'status': 'Usuario añadido'
    });
};

UsuarioCtrl.getUsuario = async(req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

UsuarioCtrl.editUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        usuario: req.body.usuario,
        contraseña: req.body.contraseña
    };
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new:true});
    res.json({status: 'Usuario actualizado'});
};

UsuarioCtrl.deleteProducto = async(req, res) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: "Producto eliminado"});
};

module.exports = UsuarioCtrl;