const mongoose = require('mongoose');


const connetDatabase = () => {  

mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
}).then((data) => {
  console.log(`Database connected successfully ${data.connection.host}`);
}).catch((err) => {
  console.error('Database connection failed:', err);
});       

}

module.exports = connetDatabase;