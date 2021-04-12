const producto = require('../model/producto')

async function listProduct(){
    const listarProducto = await producto.listarProducto();
    return listarProducto
}

async function insertProduct(req){
    const {nombre, descripcion, precio, imagen}=req.body;
    const newProducto = {nombre, descripcion, precio, imagen};
    await producto.insertarProducto(newProducto);
}

async function updateProduct(req){
    const {id}= req.params;
    const {nombre, descripcion, precio, imagen} = req.body;
    const actualizarProducto = {nombre, descripcion, precio, imagen};
    await producto.actualizarProducto(id, actualizarProducto);
}

async function deleteProduct(req){
    const {id} = req.params;
    await producto.actualizarProducto(id);
}

module.exports = {
    listProduct,
    insertProduct,
    updateProduct,
    deleteProduct
}