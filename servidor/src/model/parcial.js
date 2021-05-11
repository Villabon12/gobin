const pool = require('../database')

async function listar(data){
    return await pool.query('select * from calificacion' )}

async function busqueda(data){
    return await pool.query('select * from calificacion where calificacion = ? ',
    'and usuario_idusuario = ?', {data})
}

module.exports={
    listar,
    busqueda
}