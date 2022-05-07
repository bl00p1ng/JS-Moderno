"use strict";

const product = {
    name: 'Monitor 20 pulgadas',
    price: 350,
    isAvailable: true
};

Object.seal(product);

product.isAvailable = false;
console.table(product);

// Saber si un objeto esta sellado
console.log(Object.isSealed(product));

delete product.price;
