const merge = function (arr1, arr2) {
  let newArr = [];
  if( arr1 && arr2 ){ 
    if(arr1[0] <= arr2[0]) {
      return arr1.concat(arr2).sort();
    }
    else{
      return arr2.concat(arr1).sort();
    }
  }
  return arr1.length > 0 ? arr1 : arr2;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);