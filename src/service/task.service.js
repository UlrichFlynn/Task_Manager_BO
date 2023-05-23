const { Task } = require("../model");


exports.getAll = async () => {
    return Task.find();
}

exports.getById = async (id) => {
    return Task.findById(id);
}

exports.create = async (body) => {
    return await Task.create(body);
}

exports.getByListId = async (id) => {
    return await Task.find({listId: id});
}

exports.changeStatus = async(id, isCompleted) => {
    return await Task.findByIdAndUpdate(id, {isCompleted}, {new: true});
}

exports.delete = async (id) => {
    return Task.findByIdAndDelete(id);
}