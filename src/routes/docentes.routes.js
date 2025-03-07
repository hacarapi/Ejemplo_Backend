import { Router } from 'express';
import docentesControllers from '../controllers/docentes.controllers.js';

const router = Router();

router.route('/')
    .get(docentesControllers.getDocentes)
    .post(docentesControllers.createDocente);

router.route('/:id')
    .get(docentesControllers.getDocente)
    .post(docentesControllers.createDocente)
    .put(docentesControllers.updateDocente)
    .delete(docentesControllers.deleteDocente)

export default router;
