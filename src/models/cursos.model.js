import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Cursos = sequelize.define('Cursos', {
    id_curso: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre_curso: { type: DataTypes.STRING(100), allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    creditos: { type: DataTypes.INTEGER, allowNull: false }
});