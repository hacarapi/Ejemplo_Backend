import logger from "../logs/logger.js";
import { Estudiantes } from "../models/estudiantes.model.js";

async function getEstudiantes(req, res) {
    try{
    const estudiantes = await Estudiantes.findAll({
        attributes:['id_estudiante', 'nombre', 'apellido', 'fecha_nacimiento','genero','direccion','telefono','correo','fecha_inscripcion'],
        order:[[ 'fecha_inscripcion', 'DESC']]
    });
    res.json(estudiantes);
    } catch(error){
        logger.error(`Error getEstudiantes: ${error}`);
        res.status(500).json({message: "Error retrieving Estudiantes"});
    }  
};

async function createEstudiante(req, res) {
    try {
        const { nombre, apellido, fecha_nacimiento, genero, direccion, telefono, correo, fecha_inscripcion } = req.body;
        const newEstudiante = await Estudiantes.create({
            nombre, apellido, fecha_nacimiento, genero, direccion, telefono, correo, fecha_inscripcion
        });
        res.status(201).json(newEstudiante); // Código 201 para indicar creación exitosa
    } catch (error) {
        logger.error('Error createEstudiante: ', error);
        res.status(500).json({ message: "Error creating Estudiante" });
    }
};

async function getEstudiante(req, res) {
    try {
        const estudiante = await Estudiantes.findByPk(req.params.id, {
            attributes: ['id_estudiante', 'nombre', 'apellido', 'fecha_nacimiento', 'genero', 'direccion', 'telefono', 'correo', 'fecha_inscripcion'],
        });
        if (!estudiante) {
            return res.status(404).json({ message: 'Estudiante not found' });
        }
        res.json(estudiante);
    } catch (error) {
        logger.error(`Error getEstudiante: ${error}`);
        res.status(500).json({ message: "Error retrieving Estudiante" });
    }
};

async function updateEstudiante(req, res) {
    const { id } = req.params;
    try {
        const { nombre, apellido, fecha_nacimiento, genero, direccion, telefono, correo, fecha_inscripcion } = req.body;
        const estudiante = await Estudiantes.findByPk(id);
        if (!estudiante) {
            return res.status(404).json({ message: 'Estudiante not found' });
        }
        await estudiante.update({
            nombre, apellido, fecha_nacimiento, genero, direccion, telefono, correo, fecha_inscripcion
        });
        res.json({ message: 'Estudiante updated successfully' });
    } catch (error) {
        logger.error('Error updateEstudiante: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

async function deleteEstudiante(req, res) {
    const { id } = req.params;
    try {
        const estudiante = await Estudiantes.findByPk(id);
        if (!estudiante) {
            return res.status(404).json({ message: 'Estudiante not found' });
        }
        await estudiante.destroy();
        res.json({ message: 'Estudiante deleted successfully' });
    } catch (error) {
        logger.error('Error deleteEstudiante: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default {
    getEstudiantes,
    getEstudiante,
    createEstudiante,
    updateEstudiante,
    deleteEstudiante,
}