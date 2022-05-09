// Eliminar elemento de un Array
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

const product3 = {
    name: 'Teclado RGB',
    price: 150
};

const product4 = {
    name: 'Mouse inalambrico',
    price: 80
};

const product5 = {
    name: 'Silla gamer',
    price: 150
};

// Agregar al final
shoppingCart.push(product);
shoppingCart.push(product2);
shoppingCart.push(product4);
shoppingCart.push(product5);


// Agregar al inicio
shoppingCart.unshift(product3);

console.table(shoppingCart);

// Eliminar último elemento
shoppingCart.pop();

console.table(shoppingCart);

// Eliminar primer elemento
shoppingCart.shift();

console.table(shoppingCart);

// Eliminar en una posición especifica
shoppingCart.splice(1, 1);

console.table(shoppingCart);
