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

// En prog funcional, por lo general se busca acortar el código
const getNames = p => p.name;

const greaterThan400 = p => p.price > 400;

// A diferencia de forEach, map retorna un array nuevo sin alterar el original
const result = cart.map(getNames);
console.log(result);

const result2 = cart.filter(greaterThan400);
console.log(result2);