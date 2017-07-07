module.exports = function(app){

  app.get('/',function(req,res){
    res.send('hello world');
  });
  app.get('/about',function(req,res){
    res.send('red');
  });
  app.get('/get',function(req,res){
    res.send('<h1>你好吗</h1>');
  });
  app.get('/h?ead',function(req,res){
    res.send('blue');
  });
  app.get('/f+oot',function(req,res){
    res.send('pink');
  });
  app.get('/m*ain',function(req,res){
    res.send('main');
  });
  app.get('/redirect',function(req,res){
    res.redirect('/about');
    res.sendStatus(200);
  });
}
