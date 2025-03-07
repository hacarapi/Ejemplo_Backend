import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Estudiantes } from "./estudiantes.model.js";
import { Cursos } from "./cursos.model.js";

export const Asistencias = sequelize.define('Asistencias', {
    id_asistencia: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW  },
    estado: { type: DataTypes.ENUM('Presente', 'Ausente', 'Justificado'), allowNull: false }
});

Asistencias.belongsTo(Estudiantes, { foreignKey: 'id_estudiante' });
Asistencias.belongsTo(Cursos, { foreignKey: 'id_curso' });