const pool = require('../database');

const authLoginM = async (email, contrasenia) => {
  const exist = await pool.query(`SELECT COUNT(*) as exist 
    FROM usuario 
    WHERE
        usuario.email = '${email}' 
          AND usuario.contrasenia = '${contrasenia}'`);
  if (exist == '1') {
    const idUser = await pool.query(`SELECT usuario.id as idUser 
      FROM usuario 
      WHERE
          usuario.email = '${email}' 
            AND usuario.contrasenia = '${contrasenia}'`);
    
    return {
      exist: exist,
      userLogin: idUser
    }
  }else{
  return { exist: exist, userLogin: `` };}
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
  cargarUser,
  authLoginM,
  authRegister,
  updUser,
  deleteUser
}

/* const pool = require('../database');

    async function listarUser(){
        usua = await pool.query('select * from usuario');
        return usua
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

    module.exports = {
        listarUser,
        insertarUser,
        actualizarUser,
        eliminarUser
    } */