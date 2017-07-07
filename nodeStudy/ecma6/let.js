//let 定义的变量只在对应的代码块中有效
{
  let a = 10;
  var b = 1;
  console.log(a);
}
// console.log(a);//a is not defined;
console.log(b);//1

console.log('--------------------');
//for循环非常适合let
for (let i = 0; i < 10; i++){
  console.log(i);
}
// console.log(i);
console.log('--------------------');


var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    // var i = 100;
    console.log(i);
  };
  // a[i]();
}
console.log("i:%d",i);
a[6](); // 10

console.log('--------------------');
var b = [];
for (let i = 0; i < 10; i++) {
  b[i] = function () {
    console.log(i);
  };
}
// console.log("i:%d",i);
b[7]();

//let不允许在同一个作用域内重复声明同一个变量
{
  let c = 100;
  // let c = 10;
}
{
var x = x;
}
