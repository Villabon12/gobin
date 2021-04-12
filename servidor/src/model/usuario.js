const pool = require('../database');

async function listarUser(){
    return await pool.query('select * from usuario');
}

async function insertarUser(newUser){
    await pool.query('insert into usuario ser ?', [newUser]);
}

async function actualizarUser(id, actualizarUser){
    await pool.query('update usuario set ? where id=?', [actualizarUser, id]);
}

async function eliminarUser(id){
    await pool.query('delete from usuario where id=?', [id]);
}

module.exports={
    listarUser,
    insertarUser,
    actualizarUser,
    eliminarUser
}