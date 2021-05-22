const pool = require('../database');

const contar = async (email, contrasenia) => {
  const exist = await pool.query(`SELECT COUNT(*) as iniciar FROM usuario WHERE email = '${email}' AND contrasenia = '${contrasenia}'`);
  return exist[0].iniciar;
}

const usuario = async(email, contrasenia) =>{
  const idUser = await pool.query(`SELECT id FROM usuario WHERE email = '${email}' and contrasenia = '${contrasenia}'`);
  return idUser[0].id;
}

const authRegister = async (newUser) => {
  const user = await pool.query('INSERT INTO usuario SET ?', [newUser])
  console.log(`REGISTRO EXITOSO DE USUARIO`);

  return user;
}

const cargarUser = async (id, update) =>{
  const cargar = await pool.query('SELECT * FROM usuario')

  return cargar;
}
const updUser = async (id, update) =>{
  const actualizar = await pool.query('UPDATE usuario set ? where id=?',[update, id])
  console.log ("ACTUALIZACION EXITOSA")
  return actualizar;
}

const deleteUser = async (id) => {
  const eliminar = await pool.query('DELETE from usuario where id=?', [id]);
  console.log("SE ELIMINO EL USUARIO")
  return eliminar;
}

module.exports = {
  usuario,
  cargarUser,
  contar,
  authRegister,
  updUser,
  deleteUser
}