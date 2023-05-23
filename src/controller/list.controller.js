const { listService } = require("../service");


exports.getAll = async (req, res) => {
    try {
        const lists = await listService.getAll();
        return res.status(200).json({
            type: "success",
            data: lists
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
        const newList = await listService.create(req.body);
        if(newList) {
            return res.status(201).json({
                type: "success",
                data: newList
            });
        }
        else {
            return res.status(500).json({
                type: "error",
                message: "List not created"
            });
        }
    } catch (error) {
        return res.status(500).json({
            type: "error",
            message: error
        });
    }
}

exports.getById = async(req, res) => {
    try {
        let id = req.params.id;
        const list = await listService.getById(id);
        if(list) {
            return res.status(200).json({
                type: "success",
                data: list
            });
        }
        else {
            return res.status(500).json({
                type: "error",
                message: "List not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            type: "error",
            message: error
        });
    }
}