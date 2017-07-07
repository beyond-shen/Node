var fs = require('fs');

fs.stat('./txt.c', (err,stats) => {
  if(err){
  console.log(err);
  }
  console.log(stats);
});
