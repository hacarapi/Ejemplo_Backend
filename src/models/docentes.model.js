import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Docentes = sequelize.define('Docentes', {
    id_docente: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    apellido: { type: DataTypes.STRING(100), allowNull: false },
    especialidad: { type: DataTypes.STRING(100) },
    telefono: { type: DataTypes.STRING(15) },
    correo: { type: DataTypes.STRING(100), unique: true },
    fecha_contratacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW  }
});