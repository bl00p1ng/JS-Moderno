const user = true;
const canPay = false;

if (user && canPay) {
    console.log('Si puedes comprar');
} else if(!user && !canPay) {
    console.log('No puedes comprar');
} else if(!user) {
    console.log('Inicia sesión o registrate');
} else if(!canPay) {
    console.log('Fondos insuficientes');
}