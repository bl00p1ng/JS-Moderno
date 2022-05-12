const authenticated = true;
const canPay = true;

console.log(authenticated && canPay ? 'Si puede pagar' : 'No puede pagar');

// Anidar condiciones
console.log(authenticated ? canPay ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado, no puede pagar' : 'No esta autenticado');
