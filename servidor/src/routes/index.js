const express = require('express');
const router = express.Router();
const comentarioController = require('../controller/comentarioController');
const productoController = require('../controller/productoController');
const publicacionController = require('../controller/publicacionContoller');


router.get('/home', async (req, res)=>{

    res.render('inicio/home');
})

router.get('/blog', async(req, res)=>{
    res.render('inicio/blog')
})

router.get('/producto', async(req, res) => {
    const prod =  await productoController.listProduct();
    
    res.render('inicio/producto', {prod});
  
  });

router.get('/nosotros', async(req, res)=>{
    res.render('inicio/nosotro')
})

router.get('/contactos', async(req, res)=>{
    res.render('inicio/contacteno')
})

router.get('/login', async(req, res)=>{
    res.render('login/login')
})

router.get('/registro', async(req, res)=>{
    res.render('login/register')
})


module.exports = router;