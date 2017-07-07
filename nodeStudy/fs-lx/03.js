var fs = require('fs');

fs.access("./node", fs.constants.F_OK, (err) => {
  if(err){
    fs.mkdir("./node",(err) => {
      console.log(err);
    });
  }else{
    fs.rmdir("./node", (err) => {
      console.log(err);
    });
  }
});
