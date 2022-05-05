const product = 'Monitor de 20 pulgadas';
console.log(product);

// Reemplazar str
console.log(product.replace('pulgadas', '"'));
console.log(product.replace('Monitor', 'Monitor curvo'));

// Cortar - Extraer str
console.log(product.slice(0, 13));
console.log(product.slice(13));
// Si a > b no cortarp nada
console.log(product.slice(2, 1));

// Alternativa a Slice
console.log(product.substring(0, 13));
// Si a > b los ordena y hace el corte
console.log(product.substring(2, 1));

// Obtener un caracter en determinada posición
console.log(product.charAt(0));
