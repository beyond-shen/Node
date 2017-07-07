var name;

module.exports.setName = function(myname){
    name = myname;
};

module.exports.nameHello = function(){
  console.log('Hello! ' + name);
}
