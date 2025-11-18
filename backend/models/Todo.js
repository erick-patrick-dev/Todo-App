const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;