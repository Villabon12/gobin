const express = require('express');

const carritoController = require('../../controller/carritoController');

const router = express.Router();

router.get('', carritoController.listCart);

router.post('/insert', carritoController.insertCart);

router.put('/update', carritoController.updateCart)

router.delete('/delete', carritoController.deleteCart)

module.exports = router