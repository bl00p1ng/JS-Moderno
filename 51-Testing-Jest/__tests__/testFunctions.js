function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

describe('Probar funciones de suma y resta', () => {
    test('Suma de 20 y 30', () => {
        expect(sum(20, 30)).toBe(50);
    });

    test('Resta de 10 - 5', () => {
        expect(subtract(10, 5)).toBe(5);
    });
});