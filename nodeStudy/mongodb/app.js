var mongoClient = require('mongodb').MongoClient;

var assert = require('assert');

var url = 'mongodb://192.168.1.159:27017/stu';


var findDB = (db, callback) => {
  var docs = db.collection('stument').find({name:'haha'});
  docs.each((err, doc) => {
    console.log(doc);
    if(err) console.log(err);
    if(doc){
      // console.log(doc);
    }else{
      callback();
    }
  });
}

mongoClient.connect(url, (err, db) =>{
    if(err)
    console.log(err);
    console.log('connect to server');
    findDB(db, () => {
      db.close();
    });
});
