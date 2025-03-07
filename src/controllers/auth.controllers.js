import logger from '../logs/logger.js';
import { comparar } from '../common/bycrypt.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Usuarios } from '../models/usuarios.model.js';
async function login(req, res) {
    try {
        const { usuario, contraseña } = req.body;
        console.log(usuario, contraseña);
        const login_usuario = await Usuarios.findOne({ where: { usuario } });
        if (!login_usuario) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (!(await comparar(contraseña, login_usuario.contraseña))) {
            return res.status(403).json({ message: 'Usuario no Autorizado' });
        }
        const secret = process.env.JWT_SECRET;
        const seconds = process.env.JWT_EXPIRES_SECONDS;
        const token = jwt.sign(
            { userId: login_usuario.id_usuario }, 
            secret, 
            { expiresIn: eval(seconds) }
        );
        res.json({ token });
    } catch (error) {
        logger.error('Error Login: ' + error);
        return res.status(500).json({ message: 'Server Error' });
    }
};

export default {
    login
};