const loadAPIBtn = document.querySelector('#cargarAPI');

loadAPIBtn.addEventListener('click', getData);

function getData() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(response => response.json())
        .then(result => showHTML(result))
        .catch((err) => console.error(err));
}

function showHTML(dataFormAPI) {
    const content = document.querySelector('.contenido');

    let html = '';

    dataFormAPI.forEach(profile => {
        const {author, post_url} = profile;

        html += `
            <p><b>Autor:</b> ${author}</p>
            <a href="${post_url}" target="_blank">Ver imagen</a>
        `;
    });

    content.innerHTML = html;
}