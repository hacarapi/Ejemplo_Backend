import logger from "../logs/logger.js";
import { Asistencias } from "../models/asistencias.model.js";

async function getAsistencias(req, res) {
    try{
    const asistencias = await Asistencias.findAll({
        attributes:['id_asistencia', 'id_curso', 'id_estudiante', 'estado', 'fecha'],
        order:[[ 'fecha', 'DESC']]
    });
    res.json(asistencias);
    } catch(error){
        logger.error(`Error getAsistencias: ${error}`);
        res.status(500).json({message: "Error retrieving Asistencias"});
    }  
};

async function createAsistencia(req, res) {
    try {
        const { id_curso, id_estudiante, estado, fecha } = req.body;
        const new_asistencia = await Asistencias.create({
            id_curso, id_estudiante, estado, fecha
        });
        res.status(201).json(new_asistencia); // Código 201 para indicar creación exitosa
    } catch (error) {
        logger.error('Error createAsistencia: ', error);
        res.status(500).json({ message: "Error creating Asistencia" });
    }
};

async function getAsistencia(req, res) {
    try {
        const asistencia = await Asistencias.findByPk(req.params.id, {
            attributes: ['id_asistencia', 'id_curso', 'id_estudiante', 'estado', 'fecha'],
        });
        if (!asistencia) {
            return res.status(404).json({ message: 'Asistencia not found' });
        }
        res.json(asistencia);
    } catch (error) {
        logger.error(`Error getAsistencia: ${error}`);
        res.status(500).json({ message: "Error retrieving Asistencia" });
    }
};

async function updateAsistencia(req, res) {
    const { id } = req.params;
    try {
        const { id_curso, id_estudiante, estado, fecha } = req.body;
        const update_asistencia = await Asistencias.findByPk(id);
        if (!update_asistencia) {
            return res.status(404).json({ message: 'Asistencia not found' });
        }
        await update_asistencia.update({
            id_curso, id_estudiante, estado, fecha
        });
        res.json({ message: 'Asistencia updated successfully' });
    } catch (error) {
        logger.error('Error updateAsistencia: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

async function deleteAsistencia(req, res) {
    const { id } = req.params;
    try {
        const asistencia = await Asistencias.findByPk(id);
        if (!asistencia) {
            return res.status(404).json({ message: 'Asistencia not found' });
        }
        await asistencia.destroy();
        res.json({ message: 'Asistencia deleted successfully' });
    } catch (error) {
        logger.error('Error deleteAsistencia: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default {
    getAsistencias,
    getAsistencia,
    createAsistencia,
    updateAsistencia,
    deleteAsistencia,
}