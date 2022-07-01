const number = 20;

// Funciones puras o Pure Functions
const duplicate = number => number * 2;

// La función pura retorna un número nuevo, sin modificar el existente
const result = duplicate(number);

console.log('Número duplicado', result);
console.log('Número original', number);