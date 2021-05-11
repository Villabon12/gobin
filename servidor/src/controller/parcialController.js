const parcialModel = require('../model/parcial');

async function listarDatos (req, res){
    const listar = await parcialModel.listar();
    return res.json(listar)
}
async function busquedaDatos (req, res){
    const datos = req.body;
    const busquedad = await parcialModel.busqueda(datos);
    return res.json(busquedad)
}

module.exports = {
    listarDatos,
    busquedaDatos
}