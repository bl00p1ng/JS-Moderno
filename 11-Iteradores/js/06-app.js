// forEach
const pending = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pending.forEach((element, index) => console.log(`${index}: ${element}`));

const shoppingCart = [
    {name: 'Monitor de 27 pulgadas', price: 500},
    {name: 'Teclado mecánico', price: 120},
    {name: 'Mouse Gamer', price: 80},
    {name: 'Nvidia RTX 3070', price: 1000},
    {name: 'Silla Gamer', price: 300},
];

shoppingCart.forEach(product => console.log(product.name));

const newArray = shoppingCart.map(product => product.name);
console.log(newArray);

