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

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
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