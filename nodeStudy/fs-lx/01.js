var fs = require('fs');

fs.readFile("./txt.c",'utf8',(err,data) => {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});

fs.readFile("./txt.c", (err,data) => {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});

fs.readFile("./txt.c", (data) => {
    console.log(data);
});
