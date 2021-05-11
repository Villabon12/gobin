const express = require('express');

const productoController = require('../controller/productoController')

const router = express.Router();

// Rutas index

router.get('/home', (req, res) => {
    res.render('inicio/home')
});

router.get('/blog', (req, res) =>{
    res.render('inicio/blog')
});

router.get('/contactenos', (req, res) =>{
    res.render('inicio/contacteno')
});

router.get('/nosotros', (req, res) =>{
    res.render('inicio/nosotro')
});

router.get('/productos', async(req, res) =>{
    const listarProducto = await productoController.listProduct
    res.render('inicio/producto', {listarProducto})
});

module.exports = router;