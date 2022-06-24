import * as UI from './ui.js'

export default class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }

    // Consultar API para buscar la letra de la canción
    consultAPI() {
        // Construir URL
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;

        // Enviar petición a la API
        fetch(url)
            .then(response => response.json())
            .then(result => {
                // Verificar si se recibe la letra de la canción
                if (result.lyrics) {
                    const {lyrics} = result;
    
                    UI.headingResult.textContent = `Letra de la Canción ${this.song} de ${this.artist}`;
                    UI.result.textContent = lyrics;
                } else {
                    // Mostrar mensaje de error si la canción no se encuentra
                    UI.messages.textContent = 'No se pudo encontrar la letra de la canción';
                    UI.messages.classList.add('error');

                    // Ocultar mensaje de error
                    setTimeout(() => {
                        UI.messages.textContent = '';
                        UI.messages.classList.remove('error');
                    }, 3000);
                }
            })
            .catch(err => console.error(err));
    }
}