import { DataTypes } from "sequelize";
import db from "../utils/database.js";


const Task = db.define(
    "Tasks",
    {
        Title: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN(),
            allowNull: false,
        },
        categories_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

export default Task;
