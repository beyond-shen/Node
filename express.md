# express

## 为什么要用express

express是基于nodejs平台的简易，灵活，开放的框架，丰富的http方法和任意排列的组合的connect中间件，对于快速搭建服务器起到很好的帮助

express是一个自身功能极简，完全由路由和中间件构成一个web开发框架

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

8. 创建链式的路由app.route():

```js
app.route('/app')
.get()
.post()
.put()
```
9. 使用express.Router创建模块化、可挂载的路由句柄（Router实例是完整的中间件和路由系统）

```js
router.use() // 加载中间件
var router = express.Router();
router.get();
module.exports = router;
```
10. 使用express.Router创建的路由模块的加载:
```js
// app.js中
var index = require('./index');
app.use('/',index);
```

***

2. 静态托管文件
***
将静态文件目录作为参数传递给express.static中间件就可以提供静态资源文件的访问，若多个静态目录可以多次调用中间件
```js
app.use(express.static('public')); //可以利用url直接访问静态文件
app.use('/static',express.static('public')); // 为静态资源目录指定挂载路径可以实现存放在一个虚拟目录上
```
***

3. 中间件：使用可选则挂载路径，可在应用级别或路由级别装载中间件。另外，你还可以同时装在一系列中间件函数，从而在一个挂载点上创建一个子中间件栈。

***
1. 概念:express的中间件是一个函数，可以访问请求对象(req)和响应对象(res),处于请求和响应之间进行处理。
2. 功能:执行任何代码，修改请求和响应对象，终结请求-响应循环，调用下一个栈的中间件（若中间件没有终结请求-响应循环，必须调用next()将控制权调给下一个中间件，否则请求就会挂起,）
3. 应用级中间件：绑定在app对象上，使用app.use()和app.METHOD() 
```js
//实现一个挂载点一组中间件（或者使用回调函数组）
app.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});
```
若是想跳过剩余的中间件，可以使用next('route'),只对app.VERB() + router.VERB()有效

4. 路由级中间件:绑定的对象是express.Router()，路由级使用 router.use() 或 router.VERB() 加载。
```js
var router = expresss.Router();
router.get();
router.route('/')
.get()
.post()
```

5. 错误处理中间件:错误处理中间件必须有err,req,res,next4个参数，next不用也要签名中声明，否则视为常规中间件
```js
// 错误处理
app.use(function(err,req,res,next){})
//由于404不是错误，只是无输出，所以需捕获404并处理
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
```
6. 内置中间件：从4.x开始，内置中间件只有:express.static(root[,options])
```js
app.use(express.static(path.join(__dirname,'public')));
/* 常见的options:
1. dotfiles:是否输出以点开头的文件，默认为ignore,可写allow和deny
2. etag：是否启用etag生成，默认true
3. extensions:设置文件扩展名选项，默认是空数组
4. maxAge：以毫秒或者字符串格式设置cache-control的max-age属性(可以在network的点击一个文件找到)
5. index：发送文件目录索引文件，默认为index.html,设置为false禁用
6. redirect:当路径为目录时，重定向至 “/”。默认是true
7. setHeaders:设置 HTTP 头以提供文件的函数。
*/
```
7. 第三方中间件:通过npm安装
```
常用的第三方中间件:
1. body-parser:接受post请求的数据，req.body可以获取到post请求
2. cookie-parser
3. cookie-session
4. express-session:常见属性有
      1. name(sessionId名，默认是connet.sid),
      2. resave(是否重新设置session,要保证有操作为true),
      3. saveUninitialized(是否设置session在存储容器中可以给修改),
      4. rolling(是否按照原设定的maxAge值重设session同步到cookie中，要保证session有操作的时候必须设置这个属性为true),
      5. secret(用来注册session id 到cookie中，相当与一个密钥),
      6. secure(设置cookie的secure值，默认是不设置任何值.setSecure(true)的情况下，只有https才传递到服务器端。http是不会传递的),
      7. cookie的属性如下：httpOnly(禁止对js的访问，cookie无效了),maxAge(单位毫秒，从设置cookie开始多少毫秒失效。如果maxAge和expires都设置了，最后设置的属性生效.)
5. morgan:是日志中间件，[详解网址](http://www.cnblogs.com/chyingp/p/node-learning-guide-express-morgan.html)
6. server-favicon:用来请求图标的,var favicon = require('serve-favicon') --> app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
```
***
4. 模板引擎

***
1. 常用模板:jade,ejs
2. 设置:
```js
app.set('views','./views');  // 设置模板存放路径
app.set('view engine','ejs'); // 设置模板引擎
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

1. 对于ajax请求，不能用res.render进行渲染，因为render方法只有整个页面刷新时才会有效
