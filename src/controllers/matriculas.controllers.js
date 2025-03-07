import logger from "../logs/logger.js";
import { Matriculas } from "../models/matriculas.model.js";

async function getMatriculas(req, res) {
    try{
    const matriculas = await Matriculas.findAll({
        attributes:['id_matricula', 'id_curso', 'id_estudiante', 'fecha_matricula'],
        order:[[ 'fecha_matricula', 'DESC']]
    });
    res.json(matriculas);
    } catch(error){
        logger.error(`Error getMatriculas: ${error}`);
        res.status(500).json({message: "Error retrieving Matriculas"});
    }  
};

async function createMatricula(req, res) {
    try {
        const { id_curso, id_estudiante, fecha_matricula } = req.body;
        const new_matricula = await Matriculas.create({
            id_curso, id_estudiante, fecha_matricula
        });
        res.status(201).json(new_matricula); // Código 201 para indicar creación exitosa
    } catch (error) {
        logger.error('Error createMatricula: ', error);
        res.status(500).json({ message: "Error creating Matricula" });
    }
};

async function getMatricula(req, res) {
    try {
        const matricula = await Matriculas.findByPk(req.params.id, {
            attributes: ['id_matricula', 'id_curso', 'id_estudiante', 'fecha_matricula'],
        });
        if (!matricula) {
            return res.status(404).json({ message: 'Matricula not found' });
        }
        res.json(matricula);
    } catch (error) {
        logger.error(`Error getMatricula: ${error}`);
        res.status(500).json({ message: "Error retrieving Matricula" });
    }
};

async function updateMatricula(req, res) {
    const { id } = req.params;
    try {
        const { id_curso, id_estudiante, fecha_matricula } = req.body;
        const matricula = await Matriculas.findByPk(id);
        if (!matricula) {
            return res.status(404).json({ message: 'Matricula not found' });
        }
        await matricula.update({
            id_curso, id_estudiante, fecha_matricula
        });
        res.json({ message: 'Matricula updated successfully' });
    } catch (error) {
        logger.error('Error updateMatricula: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

async function deleteMatricula(req, res) {
    const { id } = req.params;
    try {
        const matricula = await Matriculas.findByPk(id);
        if (!matricula) {
            return res.status(404).json({ message: 'Matricula not found' });
        }
        await matricula.destroy();
        res.json({ message: 'Matricula deleted successfully' });
    } catch (error) {
        logger.error('Error deleteMatricula: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default {
    getMatriculas,
    getMatricula,
    createMatricula,
    updateMatricula,
    deleteMatricula,
}