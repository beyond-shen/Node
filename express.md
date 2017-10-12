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

### 本地包的使用

```js
var app = require('express')();
app.get('/',function(req,res){})
var server = app.listen(3000,function(){})
```
