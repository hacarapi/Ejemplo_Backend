import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Docentes } from "./docentes.model.js";
import { Cursos } from "./cursos.model.js";

export const Asignaciones = sequelize.define('Asignaciones', {
    id_asignacion: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_docente: { type: DataTypes.INTEGER, allowNull: false },
    id_curso: { type: DataTypes.INTEGER, allowNull: false }
});

Asignaciones.belongsTo(Docentes, { foreignKey: 'id_docente' });
Asignaciones.belongsTo(Cursos, { foreignKey: 'id_curso' });