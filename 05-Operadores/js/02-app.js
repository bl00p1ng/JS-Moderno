const number1 = 20;
const number2 = '20';
const number3 = 30;

// Revisar si son iguales
console.log(number1 == number3);
// == -> Solo revisa valor, no tipo de dato
console.log(number1 == number2);
// === -> Más estricto, también revisa el tipo de dato
console.log(number1 === number2);

// Comparar si son diferentes
const password1 = 'admin';
const password2 = 'Admin';

console.log(password1 != password2);  // True si son diferentes
console.log(number1 != number2);  // False si no son diferentes

// !== -> Más estricto, compara tanbién el tipo de dato
console.log(number1 !== number2);
