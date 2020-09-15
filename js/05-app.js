document.addEventListener('visivilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar la funcion para seguir en la pagina');
    } else{
        console.log('Pausar pagina');
    }
})