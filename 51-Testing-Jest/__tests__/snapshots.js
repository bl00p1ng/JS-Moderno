const client = {
    name: 'Andrés Felipe',
    credit: 500,
    type: 'Premium'
};

describe('Testing al cliente', () => {
    test('Comprobar nombre, saldo y tipo', () => {
        expect(client).toMatchSnapshot();
    });
});