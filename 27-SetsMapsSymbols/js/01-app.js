const cart = new Set();

// ***** Set Methods *****

// Agregar elemento
cart.add('Camisa');
cart.add('Boomer - Cleopatrick (Album)');
cart.add('I Can Fool Anybody in This Town - Liily (Album)');

console.log(cart);

// Tamaño
console.log(cart.size);

// Comprobar si existe un valor
console.log(cart.has('Camisa'));

// Borrar elemento
cart.delete('Camisa');
console.log(cart);

// Eliminar todos los elementos
// cart.clear();
// console.log(cart);

// Iterar
cart.forEach(product => console.log(product));

/* Caso práctico:
Del siguiente array, eliminar todos los duplicados */
const numbers = [10, 20, 30, 30, 40, 10, 20];

const noDuplicate = new Set(numbers);
console.log(noDuplicate);