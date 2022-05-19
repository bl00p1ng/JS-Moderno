const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if (e.target.classList.contains('titulo')) {
        console.log('Diste Click en título');
    } else if (e.target.classList.contains('precio')) {
        console.log('Diste Click en precio');
    } else if (e.target.classList.contains('card')) {
        console.log('Diste Click en card');
    }
});