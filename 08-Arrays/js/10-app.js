const shoppingCart = [
    {name: 'Monitor de 27 pulgadas', price: 500},
    {name: 'Teclado mecánico', price: 120},
    {name: 'Mouse Gamer', price: 80},
    {name: 'Nvidia RTX 3070', price: 1000},
    {name: 'Silla Gamer', price: 300},
];

// Map crea un nuevo arreglo
const newArray = shoppingCart.map(function(product) {
    return `${product.name} - Precio: ${product.price}`;
});

// For Each no crea un nuevo arreglo
const newArray2 = shoppingCart.forEach(function(product) {
    return `${product.name} - Precio: ${product.price}`;
});

console.log(newArray);
console.log(newArray2);  // Undefined