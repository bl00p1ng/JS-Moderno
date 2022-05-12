const cash = 300;
const credit = 400;
const available = cash + credit;
const totalToPay = 600;

if (cash > totalToPay || credit > totalToPay || available > totalToPay) {
    console.log('Si podemos pagar');
} else {
    console.log('No podemos pagar');
}