const client = {
    name: 'Andrés',
    credit: 500
};

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        expect(client.credit).toBeGreaterThan(400);
    });

    test('El cliente es Andrés', () => {
        expect(client.name).toBe('Andrés');
    });
});