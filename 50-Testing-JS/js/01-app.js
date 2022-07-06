// Probar dos valores
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Resultado de la ejecución de la función sum
let result = sum(1, 2);

// Resultado esperado de la suma
let expected = 3;

if (result !== expected) {
    console.error(`El resultado ${result} es diferente a lo esperado. La prueba no paso`);
} else {
    console.log('La prueba paso correctamente');
}

// Resultado de la ejecución de la función subtract
result = subtract(10, 5);

// Resultado esperado de la resta
expected = 5;

if (result !== expected) {
    console.error(`El resultado ${result} es diferente a lo esperado. La prueba no paso`);
} else {
    console.log('La prueba paso correctamente');
}