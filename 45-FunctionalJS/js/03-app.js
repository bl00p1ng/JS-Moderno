const cart = [
    { name: 'Monitor 20 Pulgadas', price: 500},
    { name: 'Televisión 50 Pulgadas', price: 700},
    { name: 'Tablet', price: 300},
    { name: 'Audifonos', price: 200},
    { name: 'Teclado', price: 50},
    { name: 'Celular', price: 500},
    { name: 'Bocinas', price: 300},
    { name: 'Laptop', price: 800},
];

// const result = cart.filter(product => product.price > 400);
// console.log(result);

// Al llevarlo a high order functions (función que toma a una función como argumento)
const greaterThan400 = function(product) {
    return product.price > 400;
};

// Se pasa la función anterior como argumento de filter
const result = cart.filter(greaterThan400);
console.log(result);
