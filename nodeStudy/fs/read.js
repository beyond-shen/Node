var fs = require('fs');


//为什么把读和关闭写在open的回调函数：一是为了获得fd,二是由于是异步，不确定什么时候能拿到fd,
fs.open("./file.md",'r', (err,fd) =>{
  if(err){
    console.error(err);
  }else{
  console.log(fd);

  var buf = new Buffer(10);
  fs.read(fd,buf,0,10,null, (err, bytesRead, buffer) => {
      if(err){
        console.error(err);
        fs.close(fd, (err) => {
          console.error(err);
          return -1;
        });

      }
        console.log(buffer);
        console.log('bytesRead:' + bytesRead);
        fs.close(fd, (err) => {
          console.error(err);
          return 0;
        });
  });


}
});
