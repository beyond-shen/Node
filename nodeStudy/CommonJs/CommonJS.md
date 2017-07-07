# CommonJS

## 什么是CommonJS?
CommonJS 试图定义一套普通应 用程序使用的API,从而填补 JavaScript 标准库过于简单的不足。CommonJS 的终极目标是制定一个像 C++ 标准库一样的规范,使得基于 CommonJS API 的应用程序可以在不同的环 境下运行,就像用 C++ 编写的应用程序可以使用不同的编译器和运行时函数库一样。为了 保持中立,CommonJS 不参与标准库实现,其实现交给像 Node.js 之类的项目来完成。

CommonJS 规范包括了模块(modules)、包(packages)、系统(system)、二进制(binary)、 控制台(console)、编码(encodings)、文件系统(filesystems)、套接字(sockets)、单元测试(unit testing)等部分。

## 规范

CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性，也就是读取module.exports变量，是一个json数据

## 特点

1. 所有代码都运行在模块作用域，不会污染全局作用域。
1. 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
1. 顺序加载
1. CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。请看下面这个例子。

## 各种情况

1. 如何访问另一个文件(模块)的私有成员?

模块端：
```
var x = 5;
module.exports.x = x;
```
引用端：
```
var a = require('path');
console.log(a.x);
```
