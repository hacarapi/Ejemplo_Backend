import { Router } from 'express';
import asignacionesControllers from '../controllers/asignaciones.controllers.js';

const router = Router();

router.route('/')
    .get(asignacionesControllers.getAsignaciones)
    .post(asignacionesControllers.createAsignacion);

router.route('/:id')
    .get(asignacionesControllers.getAsignacion)
    .post(asignacionesControllers.createAsignacion)
    .put(asignacionesControllers.updateAsignacion)
    .delete(asignacionesControllers.deleteAsignacion)

export default router;
