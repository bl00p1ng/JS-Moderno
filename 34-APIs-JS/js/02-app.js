document.addEventListener('DOMContentLoaded', () => {
    // Crear IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            console.log('El elemento esta visible');
        }
    });

    // Usar el observer para monitorear cuando este visible un elemento
    observer.observe(document.querySelector('.premium'));
});