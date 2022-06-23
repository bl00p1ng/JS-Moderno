const microphone = document.querySelector('#microfono');
const output = document.querySelector('#salida');

microphone.addEventListener('click', runSpeechAPI);

function runSpeechAPI() {
    // Crear instancia del objeto
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // Iniciar reconocimiento de voz
    recognition.start();

    // Se ejecuta cuando se inicia el reconocimiento de voz
    recognition.onstart = () => {
        output.classList.add('mostrar');
        output.textContent = 'Escuchando...';

        // Botón para detener la grabación
        const stopRecordBtn = document.createElement('button');
        stopRecordBtn.textContent = 'Detener grabación';
        output.appendChild(stopRecordBtn);

        stopRecordBtn.onclick = () => {
            output.textContent = 'Se dejo de grabar';
            recognition.stop();
        };
    };

    // Se ejecuta cuando se termina de hablar
    recognition.onspeechend = () => {
        output.textContent = 'Se dejo de grabar';
        recognition.stop();
    };

    // Se ejecuta cuando los resultados del reconocimiento de voz están listos
    recognition.onresult = function(e) {
        console.log(e.results[0][0]);

        const {confidence, transcript} = e.results[0][0];
        const speech = document.createElement('p');

        speech.textContent = `Transcripción: ${transcript}. ${parseInt(confidence * 100)}% de certeza`;
    };
}