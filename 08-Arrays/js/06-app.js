const shoppingCart = [];

// Definir un producto
const product = {
    name: 'Monitor de 32 pulgadas',
    price: 400
};

const product2 = {
    name: 'Celular',
    price: 800
};

const product3 = {
    name: 'Teclado RGB',
    price: 150
};

let result;

// Agregar al final
result = [...shoppingCart, product];
result = [...result, product2];

// Agregar al inicio
result = [product3, ...result];

console.table(result);