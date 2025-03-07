import logger from "../logs/logger.js";
import { Calificaciones } from "../models/calificaciones.model.js";

async function getCalificaciones(req, res) {
    try{
    const calificaciones = await Calificaciones.findAll({
        attributes:['id_calificacion', 'id_curso', 'id_estudiante', 'calificacion', 'fecha_calificacion'],
        order:[[ 'fecha_calificacion', 'DESC']]
    });
    res.json(calificaciones);
    } catch(error){
        logger.error(`Error getCalificaciones: ${error}`);
        res.status(500).json({message: "Error retrieving Calificaciones"});
    }  
};

async function createCalificacion(req, res) {
    try {
        const { id_curso, id_estudiante, calificacion, fecha_calificacion } = req.body;
        const new_calificacion = await Calificaciones.create({
            id_curso, id_estudiante, calificacion, fecha_calificacion
        });
        res.status(201).json(new_calificacion); // Código 201 para indicar creación exitosa
    } catch (error) {
        logger.error('Error createCalificacion: ', error);
        res.status(500).json({ message: "Error creating Calificacion" });
    }
};

async function getCalificacion(req, res) {
    try {
        const calificacion = await Calificaciones.findByPk(req.params.id, {
            attributes: ['id_calificacion', 'id_curso', 'id_estudiante', 'calificacion', 'fecha_calificacion'],
        });
        if (!calificacion) {
            return res.status(404).json({ message: 'Calificacion not found' });
        }
        res.json(calificacion);
    } catch (error) {
        logger.error(`Error getCalificacion: ${error}`);
        res.status(500).json({ message: "Error retrieving Calificacion" });
    }
};

async function updateCalificacion(req, res) {
    const { id } = req.params;
    try {
        const { id_curso, id_estudiante, calificacion, fecha_calificacion } = req.body;
        const update_calificacion = await Calificaciones.findByPk(id);
        if (!calificacion) {
            return res.status(404).json({ message: 'Calificacion not found' });
        }
        await update_calificacion.update({
            id_curso, id_estudiante, calificacion, fecha_calificacion
        });
        res.json({ message: 'Calificacion updated successfully' });
    } catch (error) {
        logger.error('Error updateCalificacion: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

async function deleteCalificacion(req, res) {
    const { id } = req.params;
    try {
        const calificacion = await Calificaciones.findByPk(id);
        if (!calificacion) {
            return res.status(404).json({ message: 'Calificacion not found' });
        }
        await calificacion.destroy();
        res.json({ message: 'Calificacion deleted successfully' });
    } catch (error) {
        logger.error('Error deleteCalificacion: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default {
    getCalificaciones,
    getCalificacion,
    createCalificacion,
    updateCalificacion,
    deleteCalificacion,
}