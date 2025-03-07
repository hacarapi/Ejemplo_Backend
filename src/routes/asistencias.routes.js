import { Router } from 'express';
import asistenciasControllers from '../controllers/asistencias.controllers.js';

const router = Router();

router.route('/')
    .get(asistenciasControllers.getAsistencias)
    .post(asistenciasControllers.createAsistencia);

router.route('/:id')
    .get(asistenciasControllers.getAsistencia)
    .post(asistenciasControllers.createAsistencia)
    .put(asistenciasControllers.updateAsistencia)
    .delete(asistenciasControllers.deleteAsistencia)

export default router;
