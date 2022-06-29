// Mostra una alerta en la UI
export function showAlert(msg) {
    // Revisar que solo se muestre un alerta a la vez
    if (!document.querySelector('.alert')) {
        const alert = document.createElement('p');
        alert.classList.add('alert', 
                            'bg-red-100', 
                            'border-red-400', 
                            'text-red-700', 
                            'px-4', 
                            'py-3', 
                            'rounded', 
                            'max-w-lg', 
                            'mx-auto', 
                            'mt-6', 
                            'text-center');
        alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${msg}</span>
        `;

        // Agregar alerta al HTML
        const form = document.querySelector('#formulario');
        form.appendChild(alert);

        // Ocultar alerta después de 3 segundos
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}