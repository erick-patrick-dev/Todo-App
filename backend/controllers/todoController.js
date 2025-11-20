const Todo = require('../models/Todo');

module.exports = {
    // POST /api/todos
    async create(req, res) {
        const { description, done } = req.body;
        if (!description) {
            return res.status(422).json({ error: 'Descrição é obrigatória' });
        }
        const todo = { description, done };
        try {
            await Todo.create(todo);
            res.status(201).json({ message: 'Criado com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    // GET /api/todos
    async read(req, res) {
        try {
            let query = Todo.find();

            // Filtro por regex na descrição
            if (req.query.description__regex) {
                const regex = req.query.description__regex;
                query = query.where('description').regex(regex);
            }

            // Ordenação
            if (req.query.sort) {
                query = query.sort(req.query.sort);
            }

            const todos = await query.exec();
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // PUT /api/todos/:id
    async update(req, res) {
        const { description, done } = req.body
        const todo = { description, done };

        try {
            const updatedTodo = await Todo.updateOne({ _id: req.params.id }, todo);
            if (updatedTodo.matchedCount === 0) {
                res.status(422).json({ message: 'Não encontrado.' })
                return;
            }
            res.status(200).json({ message: 'Atualizado com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    // DELETE /api/todos/:id
    async delete(req, res) {
        const id = req.params.id;
        const todo = await Todo.findOne({ _id: id });
        if (!todo) {
            res.status(422).json({ message: 'Não encontrado.' })
            return;
        }

        try {
            await Todo.deleteOne({ _id: id });
            res.status(200).json({ message: 'Deletado com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: error })
        }

    }
}