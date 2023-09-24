import express from "express"; 
import db from "./utils/database.js";
import initModels from "./models/initModels.js";
import User from "./models/users.model.js";
import "dotenv/config.js";
import Task from "./models/tasks.model.js";
import Category from "./models/categories.model.js";

initModels();

db.authenticate()
    .then(() => console.log('Base de datos conectada correctamente'))
    .catch((e) => console.log(e));

db.sync({force:true})
    .then(() => console.log('Base de datos sync'))
    .catch((e) => console.log(e));


User;
Task;
Category;

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());

app.get ("/", (req, res) => {
    res.send("ok");
});

//Para crear usuarios
app.post('/users', async (req, res) => {
    try {
        const {body} = req;
        const Users = await User.create(body);
        res.status(201).json(Users);
    } catch (error) {
        res.status(400).json(error);
    }
});

//Para crear tareas
app.post('/tasks', async (req, res) => {
    try {
        const {body} = req;
        const Tasks = await Task.create(body);
        res.status(201).json(Tasks);
    } catch (error) {
        res.status(400).json(error);
    }
});

//Para crear categorias
app.post('/category', async (req, res) => {
    try {
        const {body} = req;
        const categories = await Category.create(body);
        res.status(201).json(categories);
    } catch (error) {
        res.status(400).json(error);
    }
});

//Para consultar tareas
app.get('/tasks', async (req, res) => {
    try {
        const Tasks = await Task.findAll();
        res.json(Tasks);
    } catch (error) {
        res.status(400).json(error);
    }
});

//Para actualizar estado de tareas
app.put('/tasks/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const Tasks = await Task.update(body,{
            where:{id:id}
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

//Para eliminar tareas
app.delete('/tasks/:id', async (req, res) => {
    try {
        const {id} = req.params;
       await Task.destroy({
            where:{id}
        });
        res.status(204).end()
    } catch (error) {
        res.status(400).json(error);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

 