const product = 'Monitor 20 pulgadas';

// Cantidad de caracteres
console.log(product);
console.log(product.length);

// Retorna indice de caracter/conjunto de caracteres
console.log(product.indexOf('pulgadas'));
console.log(product.indexOf('Tablet'));  // Regresa -1 si no lo encuentra

// Retorna booleno si encuentra o no caracter/conjunto de caracteres
console.log(product.includes('Monitor'));
console.log(product.includes('Tablet'));