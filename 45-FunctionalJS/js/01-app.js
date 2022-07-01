const sum = function(a, b) {
    return a + b;
};

// La función se puede reasignar a una variable como si fuera un tipo de dato primitivo
const result = sum;

// Se puede usar result como si fuera un "alias" de la función
console.log(result(2, 4));