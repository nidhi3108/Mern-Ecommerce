const app = require('./app');

const dotenv = require('dotenv');
const connectDatabase = require('./config/database'); 
dotenv.config({path: 'backend/config/config.env'});

connectDatabase(); // Connect to the database

//handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down the server due to uncaught exception');
  process.exit(1);
}); // This handles any uncaught exceptions in the application, logs the error, and exits the process gracefully.

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});// This file is the entry point for the server.
// It imports the app from app.js and starts the server on port 3000.
// The server listens for incoming requests and logs a message when it's running.
// This is a simple setup to get the server up and running.
// You can add more functionality to the app in app.js as needed.
// The server can be extended with routes, middleware, and other features as the application grows.        


//unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down the server due to unhandled promise rejection');
  server.close(() => {
    process.exit(1);
  });
}); 