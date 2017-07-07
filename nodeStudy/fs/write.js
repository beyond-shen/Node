var fs = require('fs');

fs.open("./file3.md",'w', (err,fd) =>{
  if(err){
    console.error(err);
  }else{
  console.log(fd);


  fs.write(fd, "welcome you", 0, 'utf8', (err, written, string) => {
    if(err){
      console.log(err);
      fs.close(fd, (err) => {
        console.log(err);
        return -1;
      });
    }
    console.log(written);
    console.log(string);

    fs.close(fd, (err) => {
      console.log(err);
      return 0;
    });
  });
 }
});
