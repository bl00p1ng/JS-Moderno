// Destructuring de arreglos
const numbers = [10, 20, 30, 40, 50];

const [first, , third] = numbers;

console.log(first);
console.log(third);

const [one, two, ...three] = numbers;
console.log(one);
console.log(two);
console.log(three);