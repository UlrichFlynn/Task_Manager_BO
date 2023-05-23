const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3
    },
    listId: {
        type: mongoose.Types.ObjectId,
        ref: "List"
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

const task = mongoose.model("Task", taskSchema);

module.exports = task;