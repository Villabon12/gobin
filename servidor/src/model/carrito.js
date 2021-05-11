const pool = require('../database');

async function listarCart(){
    return await pool.query('select * from carrito');
}

async function insertarCart(newCart){
    return await pool.query('insert into usuario set ?', [newCart]);
}

async function actualizarCart(id, actualizarCart){
    return await pool.query('update carrito set ? where id=?', [actualizarCart, id]);
}

async function eliminarCart(id){
    return await pool.query('delete from carrito where id=?', [id]);
}

module.exports={
    listarCart,
    insertarCart,
    actualizarCart,
    eliminarCart
}