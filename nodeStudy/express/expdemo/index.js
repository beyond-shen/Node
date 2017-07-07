var express = require('express');
var app = express();

// app.use(express.static(__dirname + "/public"));
var routes = require('./routes/routes.js')(app);

app.listen(3000);
