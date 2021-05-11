const express = require('express')
const blogController = require('../../controller/publicacionContoller');
const comentarioController = require('../../controller/comentarioController');

const router = express.Router();

router.get('', blogController.listPublic, comentarioController.listComment);

router.post('', comentarioController.insertComment);

router.post('/insert', blogController.insertPublic);

router.put('/update',blogController.updatePublic);

router.put('/updateCom',comentarioController.updateComment);

router.delete('/delete', blogController.deletePublic);

router.delete('/deleteCom', comentarioController.deleteComment);

module.exports = router