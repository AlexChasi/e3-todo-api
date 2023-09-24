/*import Task from "../../models/tasks.model";

const createTask = async (req, res) => {
    try {
        const {body} = req;
        const Tasks = await Task.create(body);
        res.status(201).json(Tasks);
    } catch (error) {
        res.status(400).json(error);
    }
}

export {getAllTasks, createTask};
*/