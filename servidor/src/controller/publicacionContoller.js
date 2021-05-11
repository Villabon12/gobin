const publicacion = require('../model/publicacion')

async function listPublic(req, res){
    await publicacion.listarPublicacion();
    return res.status(200).json()
}

async function insertPublic(req, res){
    const {contenido, img}=req.body;
    const newPublic = {contenido, img};
    await publicacion.insertarPublicacion(newPublic);
    res.status(200).json({
        succes: 1,
        message: "Se ha insertado con exito"
      })
}

async function updatePublic(req, res){
    const {id}= req.params;
    const {contenido, img} = req.body;
    const actualizarPublicacion = {contenido, img};
    await publicacion.actualizarPublicacion(id, actualizarPublicacion);
    res.status(200).json({
        succes: 1,
        message: "Se ha actualizado"
      })
}

async function deletePublic(req, res){
    const {id} = req.params;
    await publicacion.eliminarPublicacion(id);
    res.status(200).json({
        succes: 1,
        message: "Se ha eliminado"
      })
}

module.exports = {
    listPublic,
    insertPublic,
    updatePublic,
    deletePublic
}