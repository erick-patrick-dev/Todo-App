require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: 'API funcionando' });
})

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando...`);
}
);