
const producto = require('../model/producto')

async function listProduct(req, res){
    const dato = await producto.listarProducto();
    return res.json(dato)
}
async function listProductC(req, res){
    const dato = await producto.listarProductoC();
    return res.json(dato)
}
async function listProductF(req, res){
    const dato = await producto.listarProductoF();
    return res.json(dato)
}
async function listProductB(req, res){
    const dato = await producto.listarProductoB();
    return res.json(dato)
}
async function listProductP(req, res){
    const dato = await producto.listarProductoP();
    return res.json(dato)
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
    listProductC,
    listProductF,
    listProductB,
    listProductP,
    insertProduct,
    updateProduct,
    deleteProduct
}