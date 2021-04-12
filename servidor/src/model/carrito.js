const pool = require('../database');

async function listarCart(){
    return await pool.query('select * from carrito');
}

async function insertarCart(newCart){
    await pool.query('insert into usuario ser ?', [newCart]);
}

async function actualizarCart(id, actualizarCart){
    await pool.query('update carrito set ? where id=?', [actualizarCart, id]);
}

async function eliminarCart(id){
    await pool.query('delete from carrito where id=?', [id]);
}

module.exports={
    listarCart,
    insertarCart,
    actualizarCart,
    eliminarCart
}