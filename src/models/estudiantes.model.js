import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Estudiantes = sequelize.define('Estudiantes', {
    id_estudiante: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    apellido: { type: DataTypes.STRING(100), allowNull: false },
    fecha_nacimiento: { type: DataTypes.DATE },
    genero: { type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro') },
    direccion: { type: DataTypes.STRING(200) },
    telefono: { type: DataTypes.STRING(15) },
    correo: { type: DataTypes.STRING(100), unique: true },
    fecha_inscripcion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW  }
});
