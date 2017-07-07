var fs = require('fs');

//测试错误，文件名错误，虽然后面写的data,但是第一个参数一定是错误参数，名字不重要
fs.readFile("./file1.md","utf8",function(data){
  console.log(data);
});
