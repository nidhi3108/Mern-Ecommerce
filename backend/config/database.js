const mongoose = require('mongoose');


const connetDatabase = () => {  

// mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// //   useCreateIndex: true,
// }).then((data) => {
//   console.log(`Database connected successfully ${data.connection.host}`);
// }).catch((err) => {
//   console.error('Database connection failed:', err);
// });  

const DB=process.env.MONGO_URI
mongoose.connect(DB)
.then((res)=>{
    console.log("server connected")
})

//we handle unhandled promise rejections globally so no need to handle it here
// .catch((err)=>{
//     console.log(err);
//     console.log("err in database connection");
// })

}

module.exports = connetDatabase;



// module.exports=mongoose