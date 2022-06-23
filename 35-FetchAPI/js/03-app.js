const loadJSONArrayBtn = document.querySelector('#cargarJSONArray');

loadJSONArrayBtn.addEventListener('click', getData);

function getData() {
    fetch('data/empleados.json')
        .then(response => response.json())
        .then(result => showHTML(result))
        .catch((err) => console.error(err));
}

function showHTML(data) {
    const content = document.querySelector('.contenido');

    let html = '';

    data.forEach(employee => {
        const {id, nombre, empresa, trabajo} = employee;

        html += `
            <p><b>Nombre:</b> ${nombre}</p>
            <p><b>ID:</b> ${id}</p>
            <p><b>Empresa:</b> ${empresa}</p>
            <p><b>Trabajo:</b> ${trabajo}</p>
        `;
    });

    content.innerHTML = html;
}