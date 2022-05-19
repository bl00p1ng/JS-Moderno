const search = document.querySelector('.busqueda');
// search.addEventListener('keydown', () => {
//     console.log('Escribiendo...');
// });

// Entrar y salir de un input
search.addEventListener('blur', () => {
    console.log('Validando form');
});

// Copiar texto
search.addEventListener('copy', () => {
    console.log('Copiando');
});

search.addEventListener('paste', () => {
    console.log('Pegando');
});

search.addEventListener('cut', () => {
    console.log('Cortando');
});

// Obtener lo que el usuario esta escribiendo
search.addEventListener('input', (e) => {
    console.log(e.target.value);
});