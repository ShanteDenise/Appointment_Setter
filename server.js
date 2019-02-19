// const express = require('express');
// const routes = require('./routes/index')
// const mongoose = require('mongoose');


// const app = express();
// app.use(logger('dev'));

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.use('/', routes)

// app.use(express.static(__dirname + '/client/build/'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/client/build/index.html')
// })

// const PORT = process.env.PORT || 3001

// app.listen(PORT, () => {
//   console.log("Magic happening on port " + PORT);
// });


// const PORT = process.env.PORT || 8080; // Step 1


// // Step 2
// mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/my_database', {
//     useNewUrlParser: true
// });

// // Configuration

// app.use('/', routes);

// // Step 3
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static( 'client/build' ));

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
//     });
// }

// app.listen(PORT, () => {
//     log(`Server is starting at PORT: ${PORT}`);
// });

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override')

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(methodOverride('_method'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname + '/public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})



module.exports = app;