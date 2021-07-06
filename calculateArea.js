const calculateRectangleArea = function(l, w) {
  return l > 0 && w > 0 ? l * w : undefined;
};

const calculateTriangleArea = function(b,h) {
  return b > 0 && h > 0 ? (b * h) / 2 : undefined;
};

const calculateCircleArea = function(r) {
  return r > 0 ? Math.PI * Math.pow(r, 2) : undefined;
};

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined