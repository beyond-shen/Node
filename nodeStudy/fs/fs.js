//该代码展示什么是异步
var fs = require('fs');


//异步:一般用在网络通信，文件读取和数据库的读取这种耗费时间的情况，会先处理其他事件，等内核操作执行完毕后再返回结果．
//若没有编码格式，会出现buffer　16进制
  fs.readFile('./file.md','utf8',function(err,data){
    //第一个参数不管名字如何都是错误参数，第二个参数才是数据参数
    if(err){
      console.error(err);
    }else{
      console.log(data);
    }
  });

  fs.writeFile('./file.md',"helloworld","utf8",function(err){
    if(err){
      console.log(err);
    }
  });
  console.log("end  ---   end  ---  end");

//若没有文件则创建
try{
 fs.writeFileSync("./file2.md","my friend","utf8");
}catch(err){
  console.log(err);
}
