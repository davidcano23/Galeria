document.addEventListener("DOMContentLoaded", () => {
    crearGaleria();
});



function crearGaleria() {
     const galeria = document.querySelector('.galeria-imagenes')

     const cantidad_imagenes = 9

     for(let i = 1; i <= cantidad_imagenes; i++) {
        const imagen = document.createElement('PICTURE')
        imagen.innerHTML = `
            <img loading="lazy" width="200" height="300" src="src/img/gallery/${i}.avif" alt="imagen galeria">
`; //Ruta exacta donde estan las img 

        //Event Handler
        imagen.onclick = function() {
            mostrarImagen(i);
        }
        
        galeria.appendChild(imagen)

         
     }
}

function mostrarImagen (i) {
    const imagen = document.createElement('PICTURE')
        imagen.innerHTML = `
            <img loading="lazy" width="200" height="300" src="src/img/gallery/${i}.avif" alt="imagen galeria">
`; //Ruta exacta donde estan las img 


    //Gneral MOdal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    
    

    //Boton cerrar Modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)
    

    //Agregar al HTMl
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fadeOut')

    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    },500);

}
