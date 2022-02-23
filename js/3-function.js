// standard syntax
function Add(x, y) {
  return x + y;
}

// anonymous function syntax
const Sub = function (x, y) {
  return x - y;
};

// arrow function syntax
const Multiply = (x, y) => {
  return x * y;
};

console.log(Add(4, 2));
console.log(Sub(4, 2));
console.log(Multiply(4, 2));
