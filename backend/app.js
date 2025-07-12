const express = require('express');
const qs = require('qs');
const app = express();
app.use((req, res, next) => {
  req.query = qs.parse(req._parsedUrl.query);
  next();
});
app.use((req, res, next) => {
  req.query = qs.parse(req._parsedUrl.query);
  next();
});


const product = require('./routes/productRoute'); 
app.use(express.json()); // Middleware to parse JSON bodies

//route importing


app.use('/api/v1', product); // Use the product routes under the specified path
app.use(require('./middleware/error')); // Error handling middleware

module.exports = app;
