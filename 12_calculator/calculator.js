const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(...args) {
	return args.flat().reduce((a, item) => a + item, 0)
};

const multiply = function(...args) {
  return args.flat().reduce((a, item) => a * item, 1)
};

const power = function(a, b) {
	let result = 1
  for (let i = 0; i < b; i++){
    result *= a
  }
  return result
};

const factorial = function(a) {
	let result = 1
  for (let i = 1; i <= a; i++){
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
