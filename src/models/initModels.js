import User from "./users.model.js";
import Task from "./tasks.model.js";
import Category from "./categories.model.js";


const initModels = () => {
  
    Task.belongsTo(User, {foreignKey: 'task_id'});
    User.hasMany(Task, {foreignKey: 'task_id'});

    Task.belongsTo(Category, {foreignKey: 'categories_id'});
    Category.hasMany(Task, {foreignKey: 'categories_id'});

};

export default initModels;