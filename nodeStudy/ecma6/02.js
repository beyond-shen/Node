//本代码讲了块级作用域



// 第一种场景:函数中的tmp变量声明提升，取代了全局的tmp,输出为undefined
var tmp = new Date();

function f(){
  console.log(tmp);
  if(false){
    var tmp = 'hello world';
  }
}

f();
