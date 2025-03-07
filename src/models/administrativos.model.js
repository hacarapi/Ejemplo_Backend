import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Administrativos = sequelize.define('Administrativos', {
    id_administrativo: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    apellido: { type: DataTypes.STRING(100), allowNull: false },
    telefono: { type: DataTypes.STRING(15) },
    correo: { type: DataTypes.STRING(100), unique: true },
    fecha_contratacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW  }
});