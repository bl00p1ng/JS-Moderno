import { sum } from '../js/funciones.js';

describe('Suma de dos números', () => {
    test('Sumar 10 y 20', () => {
        expect(sum(10, 20)).toBe(30);
    });
});