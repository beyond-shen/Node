//fs.access(path[, mode], callback)是用来测试path指定的文件或目录的用户权限
//fs.constants.F_OK - path 文件对调用进程可见。 这在确定文件是否存在时很有用，但不涉及 rwx 权限。 如果没指定 mode，则默认为该值
var fs = require('fs');
fs.access("./node",fs.constants.F_OK,(err) => {
  //出现错误要打印进行debug
  console.log(err);
  // console.error(err ? "it's there" : 'No dir');
  console.log(err ? "No dir" : "it's there");
});
