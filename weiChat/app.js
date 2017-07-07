var fs = require('fs');
var express = require('express');
var app = express();
var query = require('querystring');

var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;


app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({
  extended: true
}));

var routes = require('./routes/routes.js')(app, mongoClient);

module.exports = app;
