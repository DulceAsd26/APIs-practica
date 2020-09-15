const notificarBtn = document.querySelector('#notificar');
notificarBtn.addEventListener('click', () =>{
    Notification
    .requestPermission()
    .then(resultado => {
        console.log('El resultado es ', resultado);
    })
});
const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notification = new Notification('Esta es la noficacion', {
            body: 'Codigo para realizar tus proyectos fácil y seguro'
        });
        verNotificacion.onclick = function(){
            window.open('https://wwww.codigoconjuan.com')
        }
    }
});