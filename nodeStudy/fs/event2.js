//该代码体现了．once注册监听器时，只会触发一次
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();


var callback1  = function(){
  console.log("this once start");
};
event.once('some_1',callback1);

setTimeout(function(){
  event.emit('some_1');
},1000);

setTimeout(function(){
  event.emit('some_1');
},1000);

//移除指定事件的监听器，若不加参数，则指定event的对象上的事件
// event.removeListener('some_1',callback1);


setTimeout(function(){
  event.emit('some_1');
},1000);
