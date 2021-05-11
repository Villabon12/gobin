const comentario = require('../model/comentario')

async function listComment(req, res){
    await comentario.listarComment();
    return res.status(200).json()
}

async function insertComment(req){
    const {contenido, usuario_id}=req.body;
    const newComment = {contenido, usuario_id};
    await comentario.insertarComment(newComment);
    res.status(200).json({
        succes: 1,
        message: "Se ha comentado"
      })
}

async function updateComment(req){
    const {id}= req.params;
    const {contenido, usuario_id} = req.body;
    const actualizarComment = {contenido, usuario_id};
    await comentario.actualizarComment(id, actualizarComment);
    res.status(200).json({
        succes: 1,
        message: "Se ha actualizado comentario"
      })
}

async function deleteComment(req){
    const {id} = req.params;
    await comentario.eliminarComment(id);
    res.status(200).json({
        succes: 1,
        message: "Se ha eliminado comentario"
      })
}

module.exports = {
    listComment,
    insertComment,
    updateComment,
    deleteComment
}