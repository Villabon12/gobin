
const producto = require('../model/producto')

async function listProduct(req, res){
    await producto.listarProducto();
    return res.status(200).json()
}

async function insertProduct(req){
    const {nombre, descripcion, precio, imagen}=req.body;
    const newProducto = {nombre, descripcion, precio, imagen};
    await producto.insertarProducto(newProducto);
    res.status(200).json({
        succes: 1,
        message: "Se ha registrado producto"
      })
}

async function updateProduct(req){
    const {id}= req.params;
    const {nombre, descripcion, precio, imagen} = req.body;
    const actualizarProducto = {nombre, descripcion, precio, imagen};
    await producto.actualizarProducto(id, actualizarProducto);
    res.status(200).json({
        succes: 1,
        message: "Se ha actualizado producto"
      })
}

async function deleteProduct(req){
    const {id} = req.params;
    await producto.actualizarProducto(id);
    res.status(200).json({
        succes: 1,
        message: "Se ha eliminado producto"
      })
}

module.exports = {
    listProduct,
    insertProduct,
    updateProduct,
    deleteProduct
}