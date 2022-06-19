// Crear promise
const applyDiscount = new Promise((resolve, reject) => {
    const discount = true;

    if (discount) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
});

// Utilizar promise
applyDiscount
    .then(result => discount(result))
    .catch(error => console.error(error));

function discount(msg) {
    console.log(msg);
}