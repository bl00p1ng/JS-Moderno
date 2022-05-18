const btnFloating = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFloating.addEventListener('click', showHideFooter);

function showHideFooter() {
    // Verificar si la clase activo existe
    if (footer.classList.contains('activo')) {
        // Si la clase existe se elimina al darle click
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
    console.log(footer.classList);
}