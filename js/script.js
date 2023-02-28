function pressButton(){
    document.querySelector('.mensaje').classList.add('mostrar');
    document.querySelector('body').classList.add('scroll-off');
}

function cerrarVentana(){
    document.querySelector('.mensaje').classList.remove('mostrar');
    document.querySelector('body').classList.remove('scroll-off');
}