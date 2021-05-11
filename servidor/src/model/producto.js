const pool = require('../database');

    async function listarProducto(){
        const prod = await pool.query ('select * from productos');
        return prod
    }

    async function insertarProducto(newProducto){
        return await pool.query('insert into productos ser ?', [newProducto]);
    }

    async function actualizarProducto(id, actualizarProducto){
        return await pool.query('update productos set ? where id=?', [actualizarProducto, id]);
    }

    async function eliminarProducto(id){
        return await pool.query('delete from productos where id=?', [id]);
    }

    module.exports = {
        listarProducto,
        insertarProducto,
        actualizarProducto,
        eliminarProducto
    }
