//获取文件或目录信息，等同于linux终端的ll命令
var fs = require('fs');

fs.stat("./dir.js",　(err,stats) => {
  if(err){
    console.error(err);
  }else{
    console.log(stats);
  }
});
