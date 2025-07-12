module.exports = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
}
// This middleware catches errors from async functions and passes them to the next middleware (error handler)
// It allows for cleaner error handling in route handlers without needing to wrap each one in a try-catch block.
// Usage example: 
// app.get('/route', catchAsyncErrors(async (req, res, next) => {
//   const data = await someAsyncOperation();
//   res.json(data);
// }));
// In this case, if someAsyncOperation throws an error, it will be caught and passed to the error handling middleware defined in error.js.
// This keeps the route handlers clean and focused on their primary logic without cluttering them with error handling code.
