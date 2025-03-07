import { Router } from 'express';
import administrativosControllers from '../controllers/administrativos.controllers.js';

const router = Router();

router.route('/')
    .get(administrativosControllers.getAdministrativos)
    .post(administrativosControllers.createAdministrativo);

router.route('/:id')
    .get(administrativosControllers.getAdministrativo)
    .post(administrativosControllers.createAdministrativo)
    .put(administrativosControllers.updateAdministrativo)
    .delete(administrativosControllers.deleteAdministrativo)

export default router;
