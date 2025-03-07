import { Router } from 'express';
import usuariosControllers from '../controllers/usuarios.controllers.js';
import { authenticateToken } from '../middlewares/authenticate.middleware.js';

const router = Router();

router.route('/')
    .get(usuariosControllers.getUsuarios)
    .post(usuariosControllers.createUsuario);

router.route('/:id')
    .get(authenticateToken, usuariosControllers.getUsuario)
    .put(authenticateToken, usuariosControllers.updateUsuario)
    .delete(authenticateToken, usuariosControllers.deleteUsuario);

export default router;
