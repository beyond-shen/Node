var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();


//设置监听器的默认限制数量
event.setMaxListeners(5);
event.on('some',(a, b) => {
  //如果使用箭头函数，this为空，而不是指向EventEmitter
  console.log(a, b, this);
});
setTimeout(function(){
  event.emit('some',10,20);
},1000);
