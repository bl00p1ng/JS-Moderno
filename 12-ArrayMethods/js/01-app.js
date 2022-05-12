const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const cart = [
    { name: 'Monitor 27 Pulgadas', precio: 500 },
    { name: 'Televisión', precio: 100 },
    { name: 'Tablet', precio: 200 },
    { name: 'Audifonos', precio: 300 },
    { name: 'Teclado', precio: 400 },
    { name: 'Celular', precio: 700 },
];

// Revisar si existe un valor en un Array

// Forma manual
// months.forEach(month => {
//     if(month == 'Enero') {
//         console.log('Enero si existe');
//     }
// });

// Array method
const result = months.includes('Enero');
console.log(result);

// Revisar si existe un valor en un Array de objetos -> some()
const exist = cart.some(product => product.name === 'celular');
console.log(exist);

// some() en arrays normales
const exist2 = months.some(mes => mes === 'Febrero');
console.log(exist2);