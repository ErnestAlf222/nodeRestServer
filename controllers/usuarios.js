const  {response, request, query} = require('express');


const usuariosGet = (req = query, res) => {
    const {q,nombre,api_key} = req.query;
    
    res.json({
        msg:'get API - controlador',
        q,
        nombre,
        api_key
    })
}

const usuariosPost = (req, res) => {

    const {nombre,edad} = req.body;
    
    res.status(201).json({
        msg:'post API - controlador',
        nombre, edad, 
    })
}
const usuariosPut = (req, res) => {
    const {id} = req.params;

    res.json({
        msg:'put API - controlador',
        id
    })
}
const usuariosDelete = (req, res) => {
    res.json({
        msg:'delete API - controlador'
    })
}
const usuariosPatch = (req, res) => {
    res.json({
        msg:'patch API - controlador'
    })
}

module.exports ={
    usuariosDelete,
    usuariosGet,
    usuariosPatch,
    usuariosPost,
    usuariosPut,
}