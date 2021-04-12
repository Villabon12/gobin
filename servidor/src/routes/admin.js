const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controller/usuarioController');
const productoControlador = require('../controller/productoController');
const carritoController = require('../controller/carritoController');

router.get('/home', async(req, res) => {
  const pedido = await pedidoControlador.listPedido();
  
  res.render('admin/home', {pedido});

});

router.get('/usuario', async(req, res) => {
  const usua =  await usuarioControlador.listUsuario();
  res.render('admin/usuarios', {usua});

});

router.post('/usuario', async(req, res) => {
  await usuarioControlador.insertarUser(req);
  res.redirect('/admin/usuarios');

});

router.get('/delete/:id', async(req,res)=>{
  await usuarioControlador.eliminarUser(req);
 res.redirect('/admin/usuarios');
});

router.post('/editar-info/:id', async(req, res)=>{
  await usuarioControlador.actualizarUser(req);
  res.redirect('/admin/home');
});

router.get('/productos', async(req, res) => {
  const prod =  await productoControlador.listProducto();
  
  res.render('admin/producto', {prod});

});

router.get('/deletep/:id', async(req,res)=>{
  await carritoController.eliminarCarrito(req);
  res.redirect('/admin/carro_compra');
});

router.post('/editar-infop/:id', async(req, res)=>{

  await carritoController.actualizarCarrito(req);
  res.redirect('/admin/carro_compra');
});

router.post('/productos', async(req, res) => {
  await carritoController.insertarCarrito(req);
  res.redirect('/admin/productos');
});

router.get('/carro_compra', async(req, res) => {
  const usua =  await usuarioControlador.listUsuario();
  const prod =  await productoControlador.listProducto();
  const cart =  await carritoController.listCarrito();
  
  res.render('admin/pedido', {cart, usua, prod} );

});

router.get('/perfil', async(req, res) => {
  const usua =  await usuarioControlador.listUsuario;
  
  res.render('admin/perfil', {usua});

});

/* router.get('/config', async(req, res) => {
  const config =  await pool.query('Select * from usuario ');
  
  res.render('admin/config', {config});

}); */



module.exports = router;