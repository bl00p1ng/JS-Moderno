// Solicitar permiso para enviar notificaciones
const notifyBtn = document.querySelector('#notificar');

notifyBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(result => console.log(result));
});

// Ver notificación
const seeNotificacion = document.querySelector('#verNotificacion');

seeNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notification = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Código con Juan, aprende con proyectos reales'
        });

        notification.addEventListener('click', e => {
            e.preventDefault();

            window.open('https://codigoconjuan.com');
        });
    }

});