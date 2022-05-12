// Operador mayor y menor que
const money = 300;
const amountToBuy = 500;
const card = true;

if (money >= amountToBuy) {
    console.log('Si podemos pagar');
} else if(card) {
    console.log('Si puedo pagar porque tengo tarjeta');
} else {
    console.log('Fondos insuficientes');
}