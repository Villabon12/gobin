const comentario = require('../model/comentario')

async function listComment(){
    const listarComment = await comentario.listarComment();
    return listarComment
}

async function insertComment(req){
    const {contenido, usuario_id}=req.body;
    const newComment = {contenido, usuario_id};
    await comentario.insertarComment(newComment);
}

async function updateComment(req){
    const {id}= req.params;
    const {contenido, usuario_id} = req.body;
    const actualizarComment = {contenido, usuario_id};
    await comentario.actualizarComment(id, actualizarComment);
}

async function deleteComment(req){
    const {id} = req.params;
    await comentario.eliminarComment(id);
}

module.exports = {
    listComment,
    insertComment,
    updateComment,
    deleteComment
}