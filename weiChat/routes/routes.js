var url = 'mongodb://192.168.1.159:27017/weiChat';

module.exports = function(app, mongoClient) {

    app.get('/', function(req, res) {
        // console.log(req.url);
        res.render('index',{tishi1:""});
    });
    app.post('/chat', function(req, res) {
        // console.log(req.body);
        mongoClient.connect(url, (err, db) => {
            if (err) console.log(err);
            console.log('connect to server');
            var cursor = db.collection('informations').find({
                username1: req.body.username
            });
            cursor.each((err, doc) => {
                if (err) console.log(err);
                if (doc) {
                    console.log(doc._id);
                    if (doc.password1 === req.body.password) {
                        db.close();
                        res.render('chat', {nicheng:doc.nicheng});
                    } else {
                        db.close();
                        res.render('index',{tishi1:"用户或密码错误"});
                    }
                } else {
                    db.close();
                    res.render('index',{tishi1:"用户或密码错误"});
                    // res.redirect('/');
                }
            });
        });
    });
    app.get('/register', function(req, res) {
        res.render('register',{tishi3:""});
    });
    app.post('/regsucess', function(req, res) {
        // console.log(req.body.username1);
        var insertDB = (db, callback) => {
            db.collection('informations').insert(req.body);
            callback();
        }
        mongoClient.connect(url, (err, db) => {
            if (err) console.log(err);
            console.log('connect to server');
            // console.log(req.body.username1);
            var cursor = db.collection('informations').find({
                username1: req.body.username1
            });
            cursor.each((err, doc) => {
                if (err) console.log(err);
                if (doc) {
                    db.close();
                    res.render('register',{tishi3:"该账号已存在"});
                } else {
                  if(req.body.password1 === req.body.password2){
                    insertDB(db, () => {
                        db.close();
                        res.render('regsucess');
                    });
                  }else{
                    res.render('register',{tishi3:"两次输入密码不同，请重输"});
                  }
                }
            });
        });
    });
    app.get('/searchpw', function(req, res) {
        res.render('searchpw',{tishi4:""});
    });
    app.post('/searchOK', function(req, res) {
      // console.log(req.body.password3);

      mongoClient.connect(url, (err, db) => {
          if (err) console.log(err);
          console.log('connect to server');
          var cursor = db.collection('informations').find({
              username1: req.body.username2
          });
          cursor.each((err, doc) => {
              if (err){
              console.log(err);
            }
              if (doc) {
                // console.log(doc.password1);
                if(doc.keywords === req.body.keywords2){
                  db.collection('informations').update({username1:req.body.username2},{$set:{password1:req.body.password3, password2:req.body.password3}},false, false);
                  db.close();
                  res.render('searchOK');
                }else{
                  db.close();
                  res.render('searchpw',{tishi4:"账号或者问题不正确"});
                }
              } else {
                db.close();
                res.render('searchpw',{tishi4:"账号或者问题不正确"});
              }
          });
      });
    });
}
