const pendings = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const shoppingCart = [
    {name: 'Monitor de 27 pulgadas', price: 500},
    {name: 'Teclado mecánico', price: 120},
    {name: 'Mouse Gamer', price: 80},
    {name: 'Nvidia RTX 3070', price: 1000},
    {name: 'Silla Gamer', price: 300},
];

for(let pending of pendings) {
    console.log(pending);
}

for(let product of shoppingCart) {
    console.log(product.name);
}