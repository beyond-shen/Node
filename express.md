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

### 全局包快速搭建(express-generator 应用生成器)

第一步：创建应用
```shell 
express [options] [dir]
//常见的命令行可选选项:
1. -h : 帮助
2. --version : 版本
3. -e :  ejs引擎支持
4. --pug : pug引擎支持
5. --hbs : handlebars引擎支持
6. -H:hogan引擎支持
7. -v: dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
8. -c:(less|stylus|compass|sass) (defaults to plain css) 
9. --git: 添加.gitignore
10. -f:
```
第二步:安装包

```shell
$ npm install
```

第三步:启动应用

```shell
//linux
npm start
```
#### 结构分析

1. 路由router
***
1. 概念:由URL（路径）和一个特定的http方法组成，实现客户端对某个网站节点的访问。每一个路由都有一个或多个处理器函数，当匹配到对应路由就会执行。
2. 路由结构:app.Method(PATH,HAEDLER),其中app是express的一个实例，METHOD 是某个 HTTP 请求方式中的一个；PATH 是服务器端的路径；HANDLER 是当路由匹配到时需要执行的函数。
3. 常见的METHOD:get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind,  proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, 和 connect。
4. 特殊METHOD:app.all() --> 对于所有请求都加载中间件
5. 路径:可以是字符串，字符串模式，正则表达式
6. 路由句柄(处理函数):可以是一个回调函数，也可以是多个回调函数（指定next对象），也可以是回调函数组
```js
// 回调函数组
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);
```
7. 响应方法:

方法| 描述 |
---|------|
res.end | 终结响应处理流程 |
res.json | 发送一个json格式响应 |
res.redirect | 重定向请求处理 |
res.render | 渲染模板 |
res.send | 发送各种类型的响应|
res.sendFile | 以八位字节流的形式发送文件|
res.sendStatus | 设置响应状态代码，并将其以字符串形式作为响应体的一部分发送|
res.jsonp | 发送一个支持 JSONP 的 JSON 格式的响应。|



***

2. 静态托管文件
***
将静态文件目录作为参数传递给express.static中间件就可以提供静态资源文件的访问，若多个静态目录可以多次调用中间件
```js
app.use(express.static('public')); //可以利用url直接访问静态文件
app.use('/static',express.static('public')); // 为静态资源目录指定挂载路径可以实现存放在一个虚拟目录上
```
***


### 本地包的使用

```js
var app = require('express')();
app.get('/',function(req,res){});
var server = app.listen(3000,function(){});
```
## express常见问题

[常见问题](http://www.expressjs.com.cn/starter/faq.html)
