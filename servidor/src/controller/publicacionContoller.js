const publicacion = require('../model/publicacion')

async function listPublic(){
    const listarPublicacion = await publicacion.listarPublicacion();
    return listarPublicacion
}

async function insertPublic(req){
    const {contenido, img}=req.body;
    const newPublic = {contenido, img};
    await publicacion.insertarPublicacion(newPublic);
}

async function updatePublic(req){
    const {id}= req.params;
    const {contenido, img} = req.body;
    const actualizarPublicacion = {contenido, img};
    await publicacion.actualizarPublicacion(id, actualizarPublicacion);
}

async function deletePublic(req){
    const {id} = req.params;
    await publicacion.eliminarPublicacion(id);
}

module.exports = {
    listPublic,
    insertPublic,
    updatePublic,
    deletePublic
}