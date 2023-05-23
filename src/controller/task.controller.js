const { taskService } = require("../service");


exports.getAll = async (req, res) => {
    try {
        const tasks = await taskService.getAll();
        return res.status(200).json({
            type: "success",
            data: tasks
        });
    }
    catch(error) {
        return res.status(500).json({
            type: "error",
            message: error
        });
    }
}

exports.create = async (req, res) => {
    try {
        const newTask = await taskService.create(req.body);
        if(newTask) {
            return res.status(201).json({
                type: "success",
                data: newTask
            });
        }
        else {
            return res.status(500).json({
                type: "error",
                message: "Task not created"
            });
        }
    } catch (error) {
        return res.status(500).json({
            type: "error",
            message: error
        });
    }
}

exports.getByListId = async(req, res) => {
    try {
        let id = req.params.listId;
        const task = await taskService.getByListId(id);
        if(task) {
            return res.status(200).json({
                type: "success",
                data: task
            });
        }
        else {
            return res.status(500).json({
                type: "error",
                message: "Tasks not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            type: "error",
            message: error
        });
    }
}

exports.changeStatus = async(req, res) => {
    try {
        let id = req.params.id;
        let isCompleted = req.body.isCompleted;

        const task = await taskService.changeStatus(id, isCompleted);
        if(task) {
            return res.status(200).json({
                type: "success",
                data: task
            });
        }
        else {
            return res.status(500).json({
                type: "error",
                message: "Task not updated"
            });
        }
    } catch (error) {
        return res.status(500).json({
            type: "error",
            message: error
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        let task = await taskService.getById(id);
        if(!task) {
            return res.status(404).json({
                type: "error",
                message: "Task not found"
            });
        }
        await taskService.delete(id);

        return res.status(200).json({
            type: "success",
            message: "Task deleted"
        });
    } catch (error) {
        return res.status(500).json({
            type: "error",
            message: error
        });
    }
}