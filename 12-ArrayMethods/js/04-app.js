const cart = [
    { name: 'Monitor 27 Pulgadas', price: 500 },
    { name: 'Televisión', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Audifonos', price: 300 },
    { name: 'Teclado', price: 400 },
    { name: 'Celular', price: 700 },
];

// Productos que cuesten más de 400
let result;
result = cart.filter(product => product.price > 400);

// Productos que cuesten menos de 600
result = cart.filter(product => product.price < 600);

// Traer solo los audifonos
result = cart.filter(product => product.name === 'Audifonos');

// Traer todos los productos exepto los audifonos
result = cart.filter(product => product.name !== 'Audifonos');


console.log(result);