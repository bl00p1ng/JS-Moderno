// Funciones que retornan valores
function sum(a, b) {
    return a + b;
}

const result = sum(2, 3);
console.log(result);

// Ejemplo más avanzado
let total = 0;
function addToCart(price) {
    return total += price;
}

function calculateTax(total) {
    return total * 1.15;
}

total = addToCart(300);
total = addToCart(100);
total = addToCart(600);

const totalToPay = calculateTax(total);

console.log(`El total a pagar es de ${totalToPay}`);

console.log(total);