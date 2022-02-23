// arrow function syntax
const Multiply = (x, y) => {
  return x * y;
};

const SuperDuper = (x, y, fn) => {
  return fn(x, y);
};

console.log(SuperDuper(4, 2, Multiply));
