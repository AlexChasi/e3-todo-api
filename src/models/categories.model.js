import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Category = db.define(
    "Categories",
    {
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

export default Category;