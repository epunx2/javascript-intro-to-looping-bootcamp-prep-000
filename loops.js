var forLoop = function(array){
  for(var i = 0; i < 25; i++){
    array.push("I am $(i) strange loop${i === 0 ? '' : 's'}.");
  }
  return array;
}

var whileLoop = function(n){
  while(n > 0){
    n--;
  }
  return "done";
}