import { Router } from 'express';
import calificacionesControllers from '../controllers/calificaciones.controllers.js';

const router = Router();

router.route('/')
    .get(calificacionesControllers.getCalificaciones)
    .post(calificacionesControllers.createCalificacion);

router.route('/:id')
    .get(calificacionesControllers.getCalificacion)
    .post(calificacionesControllers.createCalificacion)
    .put(calificacionesControllers.updateCalificacion)
    .delete(calificacionesControllers.deleteCalificacion)

export default router;
