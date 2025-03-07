import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { encriptar } from "../common/bycrypt.js";
import { Estudiantes } from "./estudiantes.model.js";
import { Docentes } from "./docentes.model.js";
import { Administrativos } from "./administrativos.model.js";

export const Usuarios = sequelize.define('Usuarios', {
    id_usuario: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    rol: { type: DataTypes.ENUM('Estudiante', 'Docente', 'Administrativo'), allowNull: false },
    usuario: { type: DataTypes.STRING(50), unique: true, allowNull: false },
    contraseña: { type: DataTypes.STRING(255), allowNull: false }
});

Usuarios.belongsTo(Estudiantes, { foreignKey: 'id_estudiante', allowNull: true });
Usuarios.belongsTo(Docentes, { foreignKey: 'id_docente', allowNull: true });
Usuarios.belongsTo(Administrativos, { foreignKey: 'id_administrativo', allowNull: true });

Usuarios.beforeCreate(async (user)=> {
    try {
        user.contraseña = await encriptar(user.contraseña);
    } catch (error) {
        logger.error(error.message);
        throw new Error('Error al encriptar la contraseña')
    }
});

Usuarios.beforeUpdate(async (user)=> {
    try {
        user.contraseña = await encriptar(user.contraseña);
    } catch (error) {
        logger.error(error.message);
        throw new Error('Error al comparar la contraseña')
    }
})
