const password = '12345678';

describe('Validar contraseña', () => {
    test('Que la contraseña tenga 8 caracteres', () => {
        expect(password).toHaveLength(8);
    });

    test('Que el password no este vacío', () => {
        expect(password).not.toHaveLength(0);
    });
});