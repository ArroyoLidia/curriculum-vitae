//Funcion detecta zoom
window.addEventListener("resize", getSizes, false);

function getSizes() {
    let zoom = ((window.outerWidth - 10)
        / window.innerWidth) * 100;
        if(zoom > 200){
            document.querySelector('.mensaje').style.overflow="scroll";
            document.querySelector('.mensaje').style.justifyContent= "flex-start";
            document.querySelector('.mensaje').style.alignItems= "flex-start";
            document.querySelector('form').style.margin= "0";
        }
        else{
            document.querySelector('.mensaje').style.overflow="hidden";
            document.querySelector('.mensaje').style.justifyContent= "center";
            document.querySelector('.mensaje').style.alignItems= "center";
            document.querySelector('form').style.margin= "auto";
        }

}
//boton abrir formulario
function pressButton(){
    getSizes()
    document.querySelector('.mensaje').classList.add('mostrar');
    document.querySelector('body').classList.add('scroll-off');
}

//boton cerrar formulario 
function cerrarVentana(){
    document.querySelector('.mensaje').classList.remove('mostrar');
    document.querySelector('body').classList.remove('scroll-off');
}



