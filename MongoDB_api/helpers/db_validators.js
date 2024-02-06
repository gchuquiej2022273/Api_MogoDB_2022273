const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async (role = '') =>{
        const existeRol = await Role.findOne({ role});
        if (!existeRol) {
            throw new Error(`EL role ${role} no existe en la base de datos`);
        } 
        
}

const existenteEmail = async (correo = '') =>{
    const existEmail = await  Usuario.findOne({ correo});
    if (existEmail) {
        throw new Error (`El correo ${ correo} ya existe en la base de datos`)
    }
}

const existeUsuarioById = async (id = '') =>{
    const existeUsuario = await Usuario.findOne({id});
    if (existeUsuario) {
        throw new Error(`El usuario con el ${ id } no existe`);
    }
}

module.exports = {
    esRoleValido,
    existenteEmail,
    existeUsuarioById
}