const pool = require('../database');

async function listarPublicacion(){
    return await pool.query('Select * from publicacion');
}

async function insertarPublicacion(newPublic){
    await pool.query('insert into publicacion set ?', [newPublic]);
}

async function actualizarPublicacion(id, actualizarPublicacion){
    await pool.query('update publicacion set ? where id=?',[actualizarPublicacion, id]);
}

async function eliminarPublicacion(id){
    await pool.query('delete from publicacion where id=?', [id]);
}

module.exports={
    listarPublicacion,
    insertarPublicacion,
    actualizarPublicacion,
    eliminarPublicacion
}