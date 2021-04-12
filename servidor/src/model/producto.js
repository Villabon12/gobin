const pool = require('../database');

async function listarProducto(){
    return await pool.query('select * from productos');
}

async function insertarProducto(newProducto){
    await pool.query('insert into productos ser ?', [newProducto]);
}

async function actualizarProducto(id, actualizarProducto){
    await pool.query('update productos set ? where id=?', [actualizarProducto, id]);
}

async function eliminarProducto(id){
    await pool.query('delete from productos where id=?', [id]);
}

module.exports={
    listarProducto,
    insertarProducto,
    actualizarProducto,
    eliminarProducto
}