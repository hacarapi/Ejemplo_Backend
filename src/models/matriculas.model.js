import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Estudiantes } from "./estudiantes.model.js";
import { Cursos } from "./cursos.model.js";

export const Matriculas = sequelize.define('Matriculas', {
    id_matricula: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fecha_matricula: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

Matriculas.belongsTo(Estudiantes, { foreignKey: 'id_estudiante' });
Matriculas.belongsTo(Cursos, { foreignKey: 'id_curso' });