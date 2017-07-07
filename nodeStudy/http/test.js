var http = require('http');
var fs = require('fs');
var query = require('querystring');

var a = http.createServer(function(req, res){
  if('/' === req.url){
    // console.log(req.url);
    //res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./web.html', function(err, file){
      if(err){
        res.write('Error for 404!');
        res.end('');
      }else{
        res.write(file);
        res.end();

      }
    });
  }
  else if('/url' ===  req.url && req.method === "POST"){
    var chunk1 = "";
    var username;
    var password;
    req.on('data',function(chunk){
      chunk1 += chunk;
      // console.log(chunk1);
      username = query.parse(chunk1).username;
      password = query.parse(chunk1).password;
    });

    req.on("end",function(){
      // console.log(/(@163\.com)/g.test(username));
      if(/(@163\.com)/g.test(username)){
        if(password === "12345678"){
          res.writeHead(200,{'Content-Type':'text/html'});
          // res.end('<h1>Welcome to Node.js!</h1>');
          res.end(['Your sent a <em>' + req.method + '</em> request','<p>username:'+ username + '</p>','<p>password:'+ password +'</p>'].join(' '));
        }else{
          res.writeHead(404);
          res.end("password error!!!");
        }
      }else{
        res.writeHead(404);
        res.end("username is not exit,please register");
      }
});
  }else if('/index.html' === req.url && "GET" === req.method){
    fs.readFile('./index.html', function(err, file){
      if(err){
        res.write('Error for 404!');
        res.end('');
      }else{
        res.write(file);
        res.end();

      }
    });
  }
  else{
    res.writeHead(404);
    res.end("<h1>No found!!</h1>");
  }
});

a.listen(3000);
console.log('server: localhost:3000');
