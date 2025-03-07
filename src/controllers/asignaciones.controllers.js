import logger from "../logs/logger.js";
import { Asignaciones } from "../models/asignaciones.model.js";

async function getAsignaciones(req, res) {
    try{
    const asignaciones = await Asignaciones.findAll({
        attributes:['id_asignacion', 'id_curso', 'id_docente' ],
        order:[[ 'id_curso' , 'ASC']]
    });
    res.json(asignaciones);
    } catch(error){
        logger.error(`Error getAsignaciones: ${error}`);
        res.status(500).json({message: "Error retrieving Asignaciones"});
    }  
};

async function createAsignacion(req, res) {
    try {
        const { id_curso, id_docente  } = req.body;
        const new_asignacion = await Asignaciones.create({
            id_curso, id_docente, 
        });
        res.status(201).json(new_asignacion); // Código 201 para indicar creación exitosa
    } catch (error) {
        logger.error('Error createAsignacion: ', error);
        res.status(500).json({ message: "Error creating Asignacion" });
    }
};

async function getAsignacion(req, res) {
    try {
        const asignacion = await Asignaciones.findByPk(req.params.id, {
            attributes: ['id_asignacion', 'id_curso', 'id_docente', ],
        });
        if (!asignacion) {
            return res.status(404).json({ message: 'Asignacion not found' });
        }
        res.json(asignacion);
    } catch (error) {
        logger.error(`Error getAsignacion: ${error}`);
        res.status(500).json({ message: "Error retrieving Asignacion" });
    }
};

async function updateAsignacion(req, res) {
    const { id } = req.params;
    try {
        const { id_curso, id_docente } = req.body;
        const asignacion = await Asignaciones.findByPk(id);
        if (!asignacion) {
            return res.status(404).json({ message: 'Asignacion not found' });
        }
        await asignacion.update({
            id_curso, id_docente 
        });
        res.json({ message: 'Asignacion updated successfully' });
    } catch (error) {
        logger.error('Error updateAsignacion: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

async function deleteAsignacion(req, res) {
    const { id } = req.params;
    try {
        const asignacion = await Asignaciones.findByPk(id);
        if (!asignacion) {
            return res.status(404).json({ message: 'Asignacion not found' });
        }
        await asignacion.destroy();
        res.json({ message: 'Asignacion deleted successfully' });
    } catch (error) {
        logger.error('Error deleteAsignacion: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default {
    getAsignaciones,
    getAsignacion,
    createAsignacion,
    updateAsignacion,
    deleteAsignacion,
}