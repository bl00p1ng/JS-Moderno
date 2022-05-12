const cart = [
    { name: 'Monitor 27 Pulgadas', price: 500 },
    { name: 'Televisión', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Audifonos', price: 300 },
    { name: 'Teclado', price: 400 },
    { name: 'Celular', price: 700 },
];

// con forEach()
let result;
cart.forEach((product, index) => {
    if (product.name === 'Tablet') {
        result = cart[index];
    }
});
console.log(result);

// con find()
const result2 = cart.find(product => product.name === 'Tablet');
console.log(result2);