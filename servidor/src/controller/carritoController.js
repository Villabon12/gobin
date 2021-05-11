const carrito = require('../model/carrito')

async function listCart(req, res){
    await carrito.listarCart();
    return res.status(200).json()
}

async function insertCart(req, res){
    const {producto, precio, cantidad, total}=req.body;
    const newCart = {producto, precio, cantidad, total};
    await carrito.insertarCart(newCart);
    res.status(200).json({
        succes: 1,
        message: "Se ha registrado el producto"
      })
}

async function updateCart(req, res){
    const {id}= req.params;
    const {producto, precio, cantidad, total} = req.body;
    const actualizarCart = {producto, precio, cantidad, total};
    await carrito.actualizarCart(id, actualizarCart);
    res.status(200).json({
        succes: 1,
        message: "Se ha actualizado"
      })
}

async function deleteCart(req, res){
    const {id} = req.params;
    await carrito.eliminarCart(id);
    res.status(200).json({
        succes: 1,
        message: "Se ha eliminado del carrito"
      })
}

module.exports = {
    listCart,
    insertCart,
    updateCart,
    deleteCart
}