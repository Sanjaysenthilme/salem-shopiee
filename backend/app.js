const express = require('express');
const app = express();

const products = require('./routes/product');
const bodyParser = require('body-parser');

// app.use(bodyParser.json())
app.use(express.json())

app.use('/api/v1/',products);

module.exports = app;