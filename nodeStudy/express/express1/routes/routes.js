module.exports = function(app){
  app.get('/', function(req, res) {
    res.render('index',{name:'北京',country:'中国'}); //渲染
});

//获取一组数据
app.get('/about', function(req, res) {
  var info = [
    {name: 'Mary', age: 20},
    {name: 'Ben', age: 32},
    {name: 'Scotch', age: 21}
  ];
  //渲染时必须后面写成json格式,和ejs一一对应
  res.render('about',{info1:info});
});

app.get('/form1',function(req,res){
  res.render('form');
});
app.get('/form', function(req, res) {
  console.log(req.query);
    var info;
    res.render('form1',{info:req.query});
});
}
