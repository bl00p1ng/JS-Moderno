const cart = ['product 1', 'product 2', 'product 3'];

describe('Pruebas carrito de compras', () => {
    test('Que el array tenga 3 elementos', () => {
        expect(cart).toHaveLength(3);
    });

    test('Verificar que el carrito no este vacío', () => {
        expect(cart).not.toHaveLength(0);
    });
});