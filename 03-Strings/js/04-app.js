const product = '            Monitor de 20 pulgadas             ';

console.log(product);
console.log(product.length);

// Eliminar espacios del inicio
console.log(product.trimStart());

// Eliminar espacios del final
console.log(product.trimEnd());

// Se pueden concatenar métodos
console.log(product.trimStart().trimEnd());

// Eliminar espacios a ambos lados
console.log(product.trim());