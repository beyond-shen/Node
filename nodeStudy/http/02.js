var http = require('http');
var query = require('querystring');

var serv = http.createServer(function(req,res){
  // console.log(req.url);
  // console.log(req.method);
  if(req.url === "/"){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end([
      '<h1>Welcome to Node.js!</h1>',
      '<form method= "POST" action="/url">',
      '<fieldset>',
      '<label>Personal information </label>',
      '<p>name</p>',
      '<input type = "text" name = "name">',
      '<p>age</p>',
      '<input type = "text" name = "age">',
      '<p><button>Submit</button></p>',
      '</form>'
    ].join(' '));
  }else if(req.url === "/url" && req.method === "POST"){
    var chunk1 = "";
    var name;
    var age;
    req.on('data',function(chunk){
      chunk1 += chunk;
      console.log(chunk1);
      name = query.parse(chunk1).name;
      age = query.parse(chunk1).age;

    });
    req.on("end",function(){
      res.writeHead(200,{'Content-Type':'text/html'});
      // res.end('<h1>Welcome to Node.js!</h1>');
      res.end(['Your sent a <em>' + req.method + '</em> request','<p>name:'+ name + '</p>','<p>age:'+ age +'</p>'].join(' '));
    });
  }else{
    res.writeHead(404);
    res.end("<h1>No found!!</h1>")
  }
}).listen(3000);
