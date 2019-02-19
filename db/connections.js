//Connection to a database
// require('dotenv').config();

// // Connect to database
// const mongoose = require('mongoose');

// if (process.env.MONGODB_URI) {
//     mongoose.connect(process.env.MONGODB_URI);
//   }
//   else {
//     mongoose.connect('mongodb://localhost/appointment-setter');
//   }
//   mongoose.connection.on('error', function(err) {
//     console.error('MongoDB connection error: ' + err);
//     process.exit(-1);
//     }
//   );
//   mongoose.connection.once('open', function() {
//     console.log("Mongoose has connected to MongoDB!");
//   });

// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI).then(() => {
//     console.log('Connected to MongoDB')
// }) 
// // If the connection throws an error
// mongoose.connection.on('error', (err) => {
//     console.log('Mongoose default connection error: ' + err);
//   }) 


// module.exports = mongoose

//Connection to a database
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB')
}) 



module.exports = mongoose