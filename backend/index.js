require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const connect = require('./db/database');
connect;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rotas da API
const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API funcionando' });
})

app.listen(process.env.PORT || 3005, () => {
    console.log(`Servidor rodando...`);
}
);