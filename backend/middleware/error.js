 const ErrorHandler = require('../utils/errorhandler');


 module.exports = (err, req, res, next) => {
   err.statusCode = err.statusCode || 500;
   err.message = err.message || 'Internal Server Error';

   // Log the error for debugging purposes
   console.error(err.stack);

   //wrong mongoose object id error
   if (err.name === 'CastError') {
     const message = `Resource not found. Invalid: ${err.path}`;
     err = new ErrorHandler(message, 400);
   }  

   // Send the error response
   res.status(err.statusCode).json({
     success: false,
     error: err.message,
   });
 }  