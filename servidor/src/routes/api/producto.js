const express = require('express');

const productoController = require('../../controller/productoController');

const router = express.Router();

router.get('', productoController.listProduct);

router.post('/insert', productoController.insertProduct);

router.put('/update', productoController.updateProduct)

router.delete('/delete', productoController.deleteProduct)

module.exports = router;