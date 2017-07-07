var express = require('express');
var app = express();
var routes = require('./routes/routes.js')(app);

app.set('views',__dirname + '/views'); //设置views变量,即视图存放的目录
app.set('view engine','ejs'); //设置引擎为ejs模板

app.listen(3000);
