const authenticated = true;
// Es redundate evaluar si es == true en casos como este
if (authenticated) {
    console.log('El usuario esta autenticado');
}

// Los condicionales ejecutan solo la primera condición que se cumple

// const score = 500;
// if (score > 300) {
//     console.log('Buen puntaje');
// } else if(score > 400) {
//     console.log('Excelente!!');
// }

// La forma correcta
const score = 500;
if (score > 400) {
    console.log('Excelente!!');
} else if(score > 300) {
    console.log('Buen puntaje');
}

/* Usualmente, se ponen las condiciones y validaciones en IFs individuales
dentro de una función y se usa return para interrumpir la ejecución en cierto punto */
function checkScore() {
    if (score > 400) {
        console.log('Excelente!!');
        return;
    }

    if (score > 300) {
        console.log('Buen puntaje');
        return;
    }
}
checkScore();