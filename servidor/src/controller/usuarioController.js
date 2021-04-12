const usuario = require('../model/usuario')

async function listUser(){
    const listarUser = await usuario.listarUser();
    return listarUser
}

async function insertUser(req){
    const {nombre, email, contrasena, fecha_nacimiento, img_perfil, rol_id}=req.body;
    const newUser = {nombre, email, contrasena, fecha_nacimiento, img_perfil, rol_id};
    await usuario.insertarUser(newUser);
}

async function updateUser(req){
    const {id}= req.params;
    const {nombre, email, contrasena, fecha_nacimiento, img_perfil, rol_id} = req.body;
    const actualizarUser = {nombre, email, contrasena, fecha_nacimiento, img_perfil, rol_id};
    await usuario.actualizarUser(id, actualizarUser);
}

async function deleteUser(req){
    const {id} = req.params;
    await usuario.eliminarUser(id);
}

module.exports = {
    listUser,
    insertUser,
    updateUser,
    deleteUser
}