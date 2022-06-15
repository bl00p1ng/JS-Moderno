function createIterator(cart) {
    let i = 0;

    return {
        next: () => {
            const end = (i >= cart.lenth);
            const value = !end ? cart[i++] : undefined;

            return {
                end,
                value
            };
        }
    };
}

const cart = ['Producto 1', 'Producto 2', 'Producto 3'];

// Utilizar el iterador
const iterateCart = createIterator(cart);

console.log(iterateCart.next());
console.log(iterateCart.next());
console.log(iterateCart.next());
console.log(iterateCart.next());