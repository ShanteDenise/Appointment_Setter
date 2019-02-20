//Connection to a database
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB')
}) 
// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
  }) 


module.exports = mongoose