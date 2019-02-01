require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('./controllers/Users')
const app = express();
mongoose.connect(process.env.MONGODB_URI); 

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

// ./server.js
app.use('/api/users', Users)

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}) 
app.use(express.static(__dirname + '/client/build/'));
  app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

app.use(bodyParser.json());
app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})