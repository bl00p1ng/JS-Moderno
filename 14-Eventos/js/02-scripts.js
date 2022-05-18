const nav = document.querySelector('.navegacion');

// Registrar un evento
// nav.addEventListener('click', () => console.log('Click en Nav'));
nav.addEventListener('mouseenter', () => console.log('Entrando a la navegación'));
nav.addEventListener('mouseout', () => console.log('Saliendo de la navegación'));
nav.addEventListener('mousedown ', () => console.log('Click en la navegación'));
nav.addEventListener('mouseup', () => console.log('Click (up) en la navegación'));
nav.addEventListener('dblclick', () => console.log('Doble Click en la navegación'));