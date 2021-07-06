const lastIndexOf = function(arr, index) {
  if(arr && arr.length > 0) {
    let lastIndex = -1;
    for(let i = 0; i < arr.length; i++ ){
      if(arr[i] == index){
        lastIndex = i;
      }
    }
    return lastIndex;
  }
  return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);