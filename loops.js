var forLoop = function(array){
  for(var i = 0; i < 25; i++){
    array.push("I am $(i) strange loop${i === 0 ? '' : 's'}.");
  }
  return array;
}

var whileLoop = function(n){
  while(n > 0){
    console.log(n);
    n--;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}
var doWhileLoop = function(array) {
  do {
    array.pop();
  }while(array.length === 0 || maybeTrue());
  return array;
}