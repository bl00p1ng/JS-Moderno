const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const cart = [
    { name: 'Monitor 27 Pulgadas', precio: 500 },
    { name: 'Televisión', precio: 100 },
    { name: 'Tablet', precio: 200 },
    { name: 'Audifonos', precio: 300 },
    { name: 'Teclado', precio: 400 },
    { name: 'Celular', precio: 700 },
];

// Con array de indices
const months2 = [...months, 'Agosto'];
console.log(months2);

// Con array de objetos
const product = {name: 'HDD', price: 90};

const cart2 = [...cart, product];
console.log(cart2);