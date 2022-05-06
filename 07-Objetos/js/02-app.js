const product = {
    name: 'Monitor 20 pulgadas',
    price: 350,
    isAvailable: true
};

console.table(product);

// Notación de punto
console.log(product.name);
console.log(product.price);
console.log(product.isAvailable);

// Otra forma (menos común) de acceder a un valor de un objeto por su llave
console.log(product['name']);