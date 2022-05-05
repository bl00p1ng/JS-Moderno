const number1 = '20';
const number2 = 20.2;
const number3 = 'Uno';
const number4 = 20;

// Convertir str a int
console.log(number1);
console.log(Number.parseInt(number1));

// Convertir str a float
console.log(Number.parseFloat(number2));

// No se pueden convertir strings que no sean una representación numérica
console.log(Number.parseInt(number3));

// Revisar si un número es entero
console.log(Number.isInteger(number4));
