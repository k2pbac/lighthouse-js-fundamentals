const ageCalculator = function(name, birth, year) {
  return `${name} is ${year - birth} years old.`;  
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));