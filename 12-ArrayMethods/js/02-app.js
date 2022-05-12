const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const cart = [
    { name: 'Monitor 27 Pulgadas', precio: 500 },
    { name: 'Televisión', precio: 100 },
    { name: 'Tablet', precio: 200 },
    { name: 'Audifonos', precio: 300 },
    { name: 'Teclado', precio: 400 },
    { name: 'Celular', precio: 700 },
];

// Saber en qué índice del array se encuentra un elemento.

// Forma manual
// months.forEach((month, i) => {
//     if(month === 'Abril') {
//         console.log(`Encontrado en el indice ${i}`);
//     }
// });

// findIndex()
const index = months.findIndex(month => month === 'Abril');
console.log(index);

const isInArray = cart.findIndex(product => product.name === 'Celular');
console.log(isInArray);