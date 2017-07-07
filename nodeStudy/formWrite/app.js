var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    if("/" === req.url){
      res.writeHead(200,{"Content-Type":"text/html"});
      fs.readFile("./index.html",(err, file) =>{
        if(err){
          res.write("Error 404");
          res.end(''); // 结束
        }
        else{
          res.write(file);
          res.end();
        }
      });
    }
    else if("/url" === req.url){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end("<h1>welcom to beijing</h1>");
    }
}).listen(4000);
