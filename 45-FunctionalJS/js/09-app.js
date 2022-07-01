// Función original
const sum = (a, b, c) => a + b + c;

// la función se puede dividir en parciales
const partial = a => (b, c) => sum(a, b, c);

// Usar el partial
// 1. Asigando la función a una variable 
const firstNumber = partial(5);  // Pasar el primer parámetro (a)
const result = firstNumber(4, 3); // Pasar los otros parametros (b, c)

// Usando multiples parentesis
const partial2 = a => b => c => sum(a, b, c);
const result2 = partial2(8)(9)(10);

console.log(result);
console.log(result2);