const cart = [
    { name: 'Monitor 27 Pulgadas', price: 500 },
    { name: 'Televisión', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Audifonos', price: 300 },
    { name: 'Teclado', price: 400 },
    { name: 'Celular', price: 700 },
];

// Mostrar el total de los productos

// Forma manual
let total = 0;
cart.forEach(product => total += product.price);
console.log(total);

// Con reduce()
let result = cart.reduce((total, product) => total + product.price, 0);
console.log(result);