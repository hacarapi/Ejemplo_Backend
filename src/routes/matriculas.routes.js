import { Router } from 'express';
import matriculasControllers from '../controllers/matriculas.controllers.js';

const router = Router();

router.route('/')
    .get(matriculasControllers.getMatriculas)
    .post(matriculasControllers.createMatricula);

router.route('/:id')
    .get(matriculasControllers.getMatricula)
    .post(matriculasControllers.createMatricula)
    .put(matriculasControllers.updateMatricula)
    .delete(matriculasControllers.deleteMatricula)

export default router;
