const pool = require('../database');

async function listarComment(){
    return await pool.query('select * from comentario');
}

async function insertarComment(newComment){
    return await pool.query('insert into comentario ser ?', [newComment]);
}

async function actualizarComment(id, actualizarComment){
    return await pool.query('update comentario set ? where id=?', [actualizarComment, id]);
}

async function eliminarComment(id){
    return await pool.query('delete from comentario where id=?', [id]);
}

module.exports={
    listarComment,
    insertarComment,
    actualizarComment,
    eliminarComment
}