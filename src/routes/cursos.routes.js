import { Router } from 'express';
import cursosControllers from '../controllers/cursos.controllers.js';

const router = Router();

router.route('/')
    .get(cursosControllers.getCursos)
    .post(cursosControllers.createCurso);

router.route('/:id')
    .get(cursosControllers.getCurso)
    .post(cursosControllers.createCurso)
    .put(cursosControllers.updateCurso)
    .delete(cursosControllers.deleteCurso)

export default router;
