const express = require('express');
const routes = require('./routes/index')

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', routes)

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || port

app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
});
