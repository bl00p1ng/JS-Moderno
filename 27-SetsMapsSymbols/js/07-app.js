// Generador para elementos estáticos
function *createGenerator() {
    yield 1;
    yield 'Andrés';
    yield 3 + 3;
    yield true;
}

// const iterator = createGenerator();

// console.log(iterator);
// console.log(iterator.next().value);
// console.log(iterator.next().done);
// console.log(iterator);

// Generador para carrito de compras
const cart = ['Producto 1', 'Producto 2', 'Producto 3'];

function *generatorCart(cart) {
    for (let i = 0; i < cart.length; i++) {
        yield cart[i];
    }
}

const iterator = generatorCart(cart);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());