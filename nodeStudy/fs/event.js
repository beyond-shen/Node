var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

var callback =  function(a,b){
  // console.log("some event is occured.");
  //可以给监听器传参数,this的值为EventEmitter
  console.log(a,b,this);
};


event.setMaxListeners(5);
event.on('some',callback);


setTimeout(function(){
  event.emit('some',10,20);
},1000);

setTimeout(function(){
  event.emit('some',10,20);
},1000);

setTimeout(function(){
  event.emit('some',10,20);
},1000);
