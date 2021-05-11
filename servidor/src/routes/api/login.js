  
const express = require('express');
const router = express.Router();

const usuarioController = require('../../controller/usuarioController');

router.get('', usuarioController.cargar);

router.post('/login', usuarioController.authLogin);

router.post('/register',usuarioController.registerUser);

router.put('/update', usuarioController.updUser);

router.delete('/delete', usuarioController.deleteUser)
  
module.exports = router;