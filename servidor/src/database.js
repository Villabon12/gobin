const mysql = require('mysql');
const {promisify} = require('util');
const {database} = require('./keys');
const { Console } = require('console');

const pool = mysql.createPool(database);

pool.getConnection((err,connection)=>{
  if(err){
    if(err.code ==='PROTOCOL_CONNECTION_LOST'){
      console.error('LA CONEXION DE LA BASE DE DATOS FUE CERRADA');
    }
    if (err.code ==='ER_CON_COUNT_ERROR') {
      console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('CONEXION A BASE DE DATOS RECHAZADA')
    }
  }
  if (connection) {
    connection.release();
    console.log('conectada');
  } else console.log('conexion fallida');
  return;
});
pool.query= promisify(pool.query);
module.exports=pool;