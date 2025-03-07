import logger from "../logs/logger.js";
import { Cursos } from "../models/cursos.model.js";

async function getCursos(req, res) {
    try{
    const cursos = await Cursos.findAll({
        attributes:['id_curso', 'nombre_curso', 'descripcion', 'creditos'],
        order:[[ 'id_curso', 'ASC']]
    });
    res.json(cursos);
    } catch(error){
        logger.error(`Error getCursos: ${error}`);
        res.status(500).json({message: "Error retrieving Cursos"});
    }  
};

async function createCurso(req, res) {
    try {
        const { nombre_curso, descripcion, creditos } = req.body;
        const newCurso = await Cursos.create({
            nombre_curso, descripcion, creditos
        });
        res.status(201).json(newCurso); // Código 201 para indicar creación exitosa
    } catch (error) {
        logger.error('Error createCurso: ', error);
        res.status(500).json({ message: "Error creating Curso" });
    }
};

async function getCurso(req, res) {
    try {
        const curso = await Cursos.findByPk(req.params.id, {
            attributes: ['id_curso', 'nombre_curso', 'descripcion', 'creditos'],
        });
        if (!curso) {
            return res.status(404).json({ message: 'Curso not found' });
        }
        res.json(curso);
    } catch (error) {
        logger.error(`Error getCurso: ${error}`);
        res.status(500).json({ message: "Error retrieving Curso" });
    }
};

async function updateCurso(req, res) {
    const { id } = req.params;
    try {
        const { nombre_curso, descripcion, creditos } = req.body;
        const curso = await Cursos.findByPk(id);
        if (!curso) {
            return res.status(404).json({ message: 'Curso not found' });
        }
        await curso.update({
            nombre_curso, descripcion, creditos
        });
        res.json({ message: 'Curso updated successfully' });
    } catch (error) {
        logger.error('Error updateCurso: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

async function deleteCurso(req, res) {
    const { id } = req.params;
    try {
        const curso = await Cursos.findByPk(id);
        if (!curso) {
            return res.status(404).json({ message: 'Curso not found' });
        }
        await curso.destroy();
        res.json({ message: 'Curso deleted successfully' });
    } catch (error) {
        logger.error('Error deleteCurso: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default {
    getCursos,
    getCurso,
    createCurso,
    updateCurso,
    deleteCurso,
}