// for(let i = 0; i < 10; i++) {
//     console.log(`Número ${i}`);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`Número ${i} es PAR`);
//     } else {
//         console.log(`El número ${i} es IMPAR`);
//     }
// }

const shoppingCart = [
    {name: 'Monitor de 27 pulgadas', price: 500},
    {name: 'Teclado mecánico', price: 120},
    {name: 'Mouse Gamer', price: 80},
    {name: 'Nvidia RTX 3070', price: 1000},
    {name: 'Silla Gamer', price: 300},
];

for (let i = 0; i < shoppingCart.length; i++) {
    console.log(shoppingCart[i].name);
    
}