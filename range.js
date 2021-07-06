const range = function(start, end, step) {
  if(typeof start !== "undefined" && typeof end !== "undefined" && step > 0 && start <= end){
  const arr = [];

  while (start <= end) {
    arr.push(start);
    start += step;
  }
  return arr;
}
return [];
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));