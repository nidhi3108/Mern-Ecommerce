const express = require('express');

const app = express();
const product = require('./routes/productRoute'); 
app.use(express.json()); // Middleware to parse JSON bodies

//route importing


app.use('/api/v1', product); // Use the product routes under the specified path

module.exports = app;
