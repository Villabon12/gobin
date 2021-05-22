const usuario = require('../model/usuario');

async function cargar(req, res){
  const data = await usuario.cargarUser();
  return res.json(data);
}

async function authLogin(req, res){
  const { email, contrasenia } = req.body;
  const contar = await usuario.contar(email, contrasenia );
  if (contar === 1) {
    const idUser = await usuario.usuario(email, contrasenia );
    res.json({
      idUsuario: idUser,
      message: "Se ha iniciado sesion"
    })
  } else{
    res.json({
      message: "No existe"
    })
  }
}

async function registerUser(req, res){
  const {
    nombres,
    email, contrasenia,
    fecha_nacimiento
  } = req.body;
  const newUser = { nombres, email, contrasenia, fecha_nacimiento }
  await usuario.authRegister(newUser);
  res.status(200).json({
    sucess: 1,
    message: "Se ha registrado una persona"
  });
}

async function updUser(req, res) {
  const {id}= req.params;
  const {nombres, email, contrasenia, fecha_nacimiento, img_perfil, rol_id} = req.body;
  const update = {nombres, email, contrasenia, fecha_nacimiento, img_perfil, rol_id};
  await usuario.updUser(id, update);
  res.status(200).json({
    sucess: 1,
    message: "Se ha actualizado"
  })
}

async function deleteUser(req, res) {
  const {id} = req.params;
  await usuario.deleteUser(id);
  res.status(200).json({
    succes: 1,
    message: "Se ha eliminado"
  })
}


module.exports = {
  authLogin,
  registerUser,
  updUser,
  deleteUser,
  cargar
}

/* async function listUser(){
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
} */

/* module.exports = {
    listUser,
    insertUser,
    updateUser,
    deleteUser
} */