import logger from "../logs/logger.js";
import { Usuarios } from "../models/usuarios.model.js";
import { Estudiantes } from "../models/estudiantes.model.js";
import { Docentes } from "../models/docentes.model.js";
import { Administrativos } from "../models/administrativos.model.js";
import { where } from "sequelize";

async function getUsuarios(req, res) {
    try{
    const usuarios = await Usuarios.findAll({
        attributes:['id_usuario', 'usuario', 'contraseña', 'rol', 'id_docente','id_estudiante', 'id_administrativo'],
        order:[[ 'id_usuario', 'DESC']],
    });
    res.json(usuarios);
    } catch(error){
        logger.error(`Error getUsuarios: ${error}`);
        res.status(500).json({message: "Error retrieving Usuarios"});
    }  
};

async function createUsuario(req, res) {
    try {
        const { usuario, contraseña, rol, id_estudiante, id_docente, id_administrativo } = req.body; // Incluye rol y los IDs
        const newUsuario = await Usuarios.create({ usuario, contraseña, rol, id_estudiante, id_docente, id_administrativo });
        res.status(201).json(newUsuario); // 201 Created
    } catch (error) {
        logger.error('Error createUsuario: ', error);
        res.status(500).json({ message: "Error creating user" });
    }
};

async function getUsuario(req, res) {
    try {
        const usuario = await Usuarios.findByPk(req.params.id, {
            attributes: ['id_usuario', 'usuario', 'rol', 'id_docente','id_estudiante', 'id_administrativo'],
        });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario not found' });
        }
        res.json(usuario);
    } catch (error) {
        logger.error(`Error getUsuario: ${error}`);
        res.status(500).json({ message: "Error retrieving user" });
    }
};

async function updateUsuario(req, res) {
    const { id } = req.params;
    const { usuario, contraseña, rol, id_estudiante, id_docente, id_administrativo} = req.body;
    logger.info(usuario);
    logger.info(contraseña);
    try {
        // Validar que al menos un campo se envíe
        if (!usuario && !contraseña) {
            return res.status(400).json({ message: 'Debe proporcionar usuario o contraseña' });
        }

        // Buscar usuario existente
        const usuarioExistente = await Usuarios.findByPk(id);
        if (!usuarioExistente) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Filtrar valores `undefined` para evitar sobreescribir con `null`
        const camposActualizados = Object.fromEntries(
            Object.entries({ usuario, contraseña,rol, id_estudiante, id_docente, id_administrativo }).filter(([_, value]) => value !== undefined)
        );

        // Actualizar usuario
        const [actualizado] = await Usuarios.update(camposActualizados, { where: { id_usuario: id } });

        if (actualizado === 0) {
            return res.status(400).json({ message: 'No se realizaron cambios en el usuario' });
        }

        // Obtener usuario actualizado y enviarlo en la respuesta
        const usuarioActualizado = await Usuarios.findByPk(id, { attributes: ['id_usuario', 'usuario', 'rol', 'id_docente','id_estudiante', 'id_administrativo'] });
        res.json({ message: 'Usuario actualizado correctamente', usuario: usuarioActualizado });

    } catch (error) {
        logger.error(`Error en updateUsuario: ${error.message}`, { error });
        res.status(500).json({ message: 'Error del servidor' });
    }
};

async function deleteUsuario(req, res) {
    const { id } = req.params;
    try {
        const usuario = await Usuarios.findByPk(id);
        if (!usuario){
            return res.status(404).json({message: 'Usuario not found'});
        }
        await usuario.destroy();
        res.json({ message: 'Usuario deleted successfully' });
    } catch (error) {
        logger.error('Error deleteUser: '+ error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default {
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,
}