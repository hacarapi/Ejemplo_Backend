import logger from "../logs/logger.js";
import { Administrativos } from "../models/administrativos.model.js";

async function getAdministrativos(req, res) {
    try{
    const administrativos = await Administrativos.findAll({
        attributes:['id_administrativo', 'nombre', 'apellido', 'telefono','correo','fecha_contratacion'],
        order:[[ 'fecha_contratacion', 'DESC']]
    });
    res.json(administrativos);
    } catch(error){
        logger.error(`Error getAdministrativos: ${error}`);
        res.status(500).json({message: "Error retrieving Administrativos"});
    }  
};

async function createAdministrativo(req, res) {
    try {
        const { nombre, apellido, telefono, correo, fecha_contratacion } = req.body;
        const new_administrativo = await Administrativos.create({
            nombre, apellido, telefono, correo, fecha_contratacion
        });
        res.status(201).json(new_administrativo); // Código 201 para indicar creación exitosa
    } catch (error) {
        logger.error('Error createAdministrativo: ', error);
        res.status(500).json({ message: "Error creating Administrativo" });
    }
};

async function getAdministrativo(req, res) {
    try {
        const administrativo = await Administrativos.findByPk(req.params.id, {
            attributes: ['id_administrativo', 'nombre', 'apellido', 'telefono', 'correo', 'fecha_contratacion'],
        });
        if (!administrativo) {
            return res.status(404).json({ message: 'Administrativo not found' });
        }
        res.json(administrativo);
    } catch (error) {
        logger.error(`Error getAdministrativo: ${error}`);
        res.status(500).json({ message: "Error retrieving Administrativo" });
    }
};

async function updateAdministrativo(req, res) {
    const { id } = req.params;
    try {
        const { nombre, apellido,  telefono, correo, fecha_contratacion } = req.body;
        const administrativo = await Administrativos.findByPk(id);
        if (!administrativo) {
            return res.status(404).json({ message: 'Administrativo not found' });
        }
        await administrativo.update({
            nombre, apellido,  telefono, correo, fecha_contratacion
        });
        res.json({ message: 'Administrativo updated successfully' });
    } catch (error) {
        logger.error('Error updateAdministrativo: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

async function deleteAdministrativo(req, res) {
    const { id } = req.params;
    try {
        const administrativo = await Administrativos.findByPk(id);
        if (!administrativo) {
            return res.status(404).json({ message: 'Administrativo not found' });
        }
        await administrativo.destroy();
        res.json({ message: 'Administrativo deleted successfully' });
    } catch (error) {
        logger.error('Error deleteAdministrativo: ' + error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default {
    getAdministrativos,
    getAdministrativo,
    createAdministrativo,
    updateAdministrativo,
    deleteAdministrativo,
}