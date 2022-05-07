"use strict";

const product = {
    name: 'Monitor 20 pulgadas',
    price: 350,
    isAvailable: true
};

// Evitar que un objeto sea modificado
Object.freeze(product);

// product.isAvailable = false;
// delete product.price;
// product.image = 'image.png';

// Saber si un objeto esta congelado
console.log(Object.isFrozen(product));
