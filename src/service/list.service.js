const { List } = require("../model");


exports.getAll = async () => {
    return List.find();
}

exports.create = async (body) => {
    return await List.create(body);
}

exports.getById = async (id) => {
    return await List.findById(id);
}