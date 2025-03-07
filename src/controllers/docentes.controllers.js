import logger from "../logs/logger.js";
import { Docentes } from "../models/docentes.model.js";

async function getDocentes(req, res) {
    try{
    const docentes = await Docentes.findAll({
        attributes:['id_docente', 'nombre', 'apellido', 'telefono', 'especialidad', 'correo','fecha_contratacion'],
        order:[[ 'fecha_contratacion', 'DESC']]
    });
    res.json(docentes);
    } catch(error){
        logger.error(`Error getDocentes: ${error}`);
        res.status(500).json({message: "Error retrieving Docentes"});
    }  
};

async function createDocente(req, res) {
    try {
        const { nombre, apellido, especialidad, telefono, correo, fecha_contratacion } = req.body;
        const new_docente = await Docentes.create({
            nombre, apellido, especialidad, telefono, correo, fecha_contratacion
        });
        res.status(201).json(new_docente); // Código 201 para indicar creación exitosa
    } catch (error) {
        logger.error('Error createDocente: ', error);
        res.status(500).json({ message: "Error creating Docente" });
    }
};

async function getDocente(req, res) {
    try {
        const docente = await Docentes.findByPk(req.params.id, {
            attributes: ['id_docente', 'nombre', 'apellido', 'especialidad', 'telefono', 'correo', 'fecha_contratacion'],
        });
        if (!docente) {
            return res.status(404).json({ message: 'Docente not found' });
        }
        res.json(docente);
    } catch (error) {
        logger.error(`Error getDocente: ${error}`);
        res.status(500).json({ message: "Error retrieving Docente" });
    }
};

async function updateDocente(req, res) {
    const { id } = req.params;
    try {
        const { nombre, apellido, especialidad, telefono, correo, fecha_contratacion } = req.body;
        const docente = await Docentes.findByPk(id);
        if (!docente) {
            return res.status(404).json({ message: 'Docente not found' });
        }
        await docente.update({
            nombre, apellido, especialidad, telefono, correo, fecha_contratacion
        });
        res.json({ message: 'Docente updated successfully' });
    } catch (error) {
        logger.error('Error updateDocente: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

async function deleteDocente(req, res) {
    const { id } = req.params;
    try {
        const docente = await Docentes.findByPk(id);
        if (!docente) {
            return res.status(404).json({ message: 'Docente not found' });
        }
        await docente.destroy();
        res.json({ message: 'Docente deleted successfully' });
    } catch (error) {
        logger.error('Error deleteDocente: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default {
    getDocentes,
    getDocente,
    createDocente,
    updateDocente,
    deleteDocente,
}