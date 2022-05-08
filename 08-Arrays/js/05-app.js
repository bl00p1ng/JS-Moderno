const shoppingCart = [];

// Definir un producto
const product = {
    name: 'Monitor de 32 pulgadas',
    price: 400
};

const product2 = {
    name: 'Celular',
    price: 800
};

// Agregar al final
shoppingCart.push(product);
shoppingCart.push(product2);

const product3 = {
    name: 'Teclado RGB',
    price: 150
};

// Agregar al inicio
shoppingCart.unshift(product3);

console.table(shoppingCart);