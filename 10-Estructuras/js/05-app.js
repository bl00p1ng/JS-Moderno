// Switch case
const payMethod = 'efectivo';

switch (payMethod) {
    case 'efectivo':
        console.log(`Pagaste con ${payMethod}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${payMethod}`);
        break;
    default:
        console.log('Aún no has seleccionado un método de pago o método de pago no soportado');
        break;
}