const pool = require('../database');

    async function listarProducto(){
        const prod = await pool.query ('SELECT * FROM productos');
        return prod
    }
    async function listarProductoF(){
        const prod = await pool.query ('SELECT * FROM productos WHERE categoria_id = 1');
        return prod
    }
    async function listarProductoC(){
        const prod = await pool.query ('SELECT * FROM productos WHERE categoria_id = 2');
        return prod
    }
    async function listarProductoB(){
        const prod = await pool.query ('SELECT * FROM productos WHERE categoria_id = 3');
        return prod
    }
    async function listarProductoP(){
        const prod = await pool.query ('SELECT * FROM productos WHERE categoria_id = 4');
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
        listarProductoC,
        listarProductoF,
        listarProductoB,
        listarProductoP,
        insertarProducto,
        actualizarProducto,
        eliminarProducto
    }
