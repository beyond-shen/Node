var fs = require('fs');

fs.writeFile("./txt1.txt","hello world", (err) => {
  if(err){
    console.log(err);
  }
});
