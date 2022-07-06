function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

async function sumAsync(a, b) {
    return Promise.resolve(sum(a, b));
}

// Resultado de la ejecución de la función sum
let result = sum(1, 2);
// Resultado esperado de la suma
let expectedOutput = 3;
// Testear sum
expected(expectedOutput).toBe(result);

// Resultado de la ejecución de la función subtract
result = subtract(10, 5);
// Resultado esperado de la resta
expectedOutput = 5;
// Testear subtract
expected(expectedOutput).toBe(result);

// Probar la salida de la función vs el resultado esperado
function expected(expectedOutput) {
    return {
        toBe(result) {
            if (result !== expectedOutput) {
                console.error(`El resultado ${result} es diferente a lo esperado. La prueba no paso`);
            } else {
                console.log('La prueba paso correctamente');
            }
        }
    };
}

// Testear código asincrono
test('Suma 10 + 20 y el resultado debe ser 30', async () => {
    const result = await sumAsync(10, 20);
    const expectedOutput = 30;

    expected(expectedOutput).toBe(result);
});

async function test(msg, callback) {
    try {
        await callback();
        console.log(`El test: ${msg} se ejecuto correctamente`);
    } catch (error) {
        console.error('Error:');
        console.error(error);
    }
}