# node内置模块


## event事件

```js
var EventEmiter = require('events');
```
触发事件的对象都是EventEmiter类的实例.

### emitter.on和emitter.once,emitter.emit

1. emitter.emit(eventName[, ...args])  // 可以给回调函数传参
2. emitter.on(eventName,callback)
3. emitter.once(eventName,callback)  // 只触发一次


### 事件监听和移除事件监听

1. emitter.addListener(eventName, listener)
2. emitter.removeListener(eventName, listener)  //只能移除一个例,若多个必须多次调用


## console

### console.dir(obj[,,option])

全局的,会在控制台输出一个对象的所有属性和方法

option:

1. showHidden:默认为false,若是true,该对象的不可枚举属性和symbol属性也会显示

### console.log console.error  console.warn

全局console输出,console.error会打印到stderr,会阻止继续执行下面的代码

### console.time和console.timeEnd

1. console.time(label) :启动一个定时器,定时器由一个label(字符串)标识,单位毫秒,精确亚毫秒
2. console.timeEnd(label):停止定时器
