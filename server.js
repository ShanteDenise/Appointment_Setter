require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index')

const app = express();

// ./server.js
app.use('/', routes)


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
