# express

## 为什么要用express

express是基于nodejs平台的简易，灵活，开放的框架，丰富的http方法和任意排列的组合的connect中间件，对于快速搭建服务器起到很好的帮助

## 安装

```shell
$ npm install express --save
```

```shell
$ npm install express-generator -g   // express-generator是一个可以快速搭建应用的全局npm包
```

```shell
$ sudo npm install nodemon -g -f  // 适用于开发
```

## 使用

### 全局包快速搭建

```shell
express -e appname
```

### 本地包的使用

```shell
var app = require('express')();
```
