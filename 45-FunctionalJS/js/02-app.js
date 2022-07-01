const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

// Esta función recibe a otra función como parámetro (fn)
// Y así su vez toma a dicha función y le pasa por parámetros 10 y 20
const sumOrMultiply = fn => fn(10, 20);

console.log(sumOrMultiply(sum));
console.log(sumOrMultiply(multiply));