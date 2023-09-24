import { DataTypes } from "sequelize";
import db from "../utils/database.js";



const User = db.define(
    "Users",
    {
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        task_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

export default User;
