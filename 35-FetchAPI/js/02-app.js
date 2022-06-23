const loadJSONBtn = document.querySelector('#cargarJSON');
loadJSONBtn.addEventListener('click', getData);

function getData() {
    fetch('data/empleado.json')
        .then(response => response.json())
        .then(result => showHTML(result))
        .catch(err => console.error(err));
}

function showHTML({id, name, enterprise, job} = data) {
    const content = document.querySelector('.contenido');
    content.innerHTML = `
    <p><b>Nombre:</b> ${name}</p>
    <p><b>ID:</b> ${id}</p>
    <p><b>Empresa:</b> ${enterprise}</p>
    <p><b>Trabajo:</b> ${job}</p>
    `;
}