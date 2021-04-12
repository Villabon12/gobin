const carrito = require('../model/carrito')

async function listCart(){
    const listarCart = await carrito.listarCart();
    return listarCart
}

async function insertCart(req){
    const {producto, precio, cantidad, total}=req.body;
    const newCart = {producto, precio, cantidad, total};
    await carrito.insertarCart(newCart);
}

async function updateCart(req){
    const {id}= req.params;
    const {producto, precio, cantidad, total} = req.body;
    const actualizarCart = {producto, precio, cantidad, total};
    await carrito.actualizarCart(id, actualizarCart);
}

async function deleteCart(req){
    const {id} = req.params;
    await carrito.eliminarCart(id);
}

module.exports = {
    listCart,
    insertCart,
    updateCart,
    deleteCart
}