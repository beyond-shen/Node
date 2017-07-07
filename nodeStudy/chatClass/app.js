var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000,function(){
  console.log('listen 3000 now');
});

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.broadcast.emit('broadcast');
  socket.on('chat message',function(msg, username1){
    io.emit('chat message', msg,username1);
  });
  // socket.on('ferret', function (name, fn) {
  //    fn();
  });
