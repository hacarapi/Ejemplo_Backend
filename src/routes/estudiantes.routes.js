import { Router } from 'express';
import estudiantesControllers from '../controllers/estudiantes.controllers.js';

const router = Router();

router.route('/')
    .get(estudiantesControllers.getEstudiantes)
    .post(estudiantesControllers.createEstudiante);

router.route('/:id')
    .get(estudiantesControllers.getEstudiante)
    .post(estudiantesControllers.createEstudiante)
    .put(estudiantesControllers.updateEstudiante)
    .delete(estudiantesControllers.deleteEstudiante)

export default router;
