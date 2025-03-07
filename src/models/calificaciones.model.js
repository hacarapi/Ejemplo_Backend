import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Estudiantes } from "./estudiantes.model.js";
import { Cursos } from "./cursos.model.js";

export const Calificaciones = sequelize.define('Calificaciones', {
    id_calificacion: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    calificacion: { type: DataTypes.FLOAT, allowNull: false },
    fecha_calificacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW  }
});

Calificaciones.belongsTo(Estudiantes, { foreignKey: 'id_estudiante' });
Calificaciones.belongsTo(Cursos, { foreignKey: 'id_curso' });