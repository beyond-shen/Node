var fs = require('fs');

fs.access("./node",fs.constants.F_OK,(exsit) => {
  exsit ? fs.mkdir("./node",(err) => {
    console.error(err);
  }) : fs.rmdir("./node",(err) => {
    console.error(err);
  });
});
