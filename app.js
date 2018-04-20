var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./startup/mongoDB');
//const user=require('./models/student');
//var indexRouter = require('./routes/index');
var apisRouter = require('./routes/apis');
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', indexRouter);
app.use('/api', apisRouter);
module.exports = app;