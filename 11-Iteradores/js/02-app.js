// for loop que detenga la ejecución en el elemento 5
// for(let i = 0; i < 10; i++) {
//     if (i === 5) {{
//         console.log('Este es el 5');
//         break;
//     }
        
//     }    
//     console.log(`Número ${i}`);
// }

// Interceptar el 5 y escribirlo en letras
// for(let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log('CINCO');
//         continue;
//     }
//     console.log(`Número ${i}`);
// }

const shoppingCart = [
    {name: 'Monitor de 27 pulgadas', price: 500},
    {name: 'Teclado mecánico', price: 120},
    {name: 'Mouse Gamer', price: 80, discount: true},
    {name: 'Nvidia RTX 3070', price: 1000},
    {name: 'Silla Gamer', price: 300},
];

for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].discount) {
        console.log(`El articulo ${shoppingCart[i].name} tiene descuento`);
        continue;
    }
    console.log(shoppingCart[i].name);
}

