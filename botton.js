
let botonesMegusta = document.querySelectorAll('.megusta-button');

botonesMegusta.forEach((boton, index) => {

    let contadorMegusta = 0;


    boton.addEventListener('click', () => {
    
        contadorMegusta++;

        document.querySelector(`.megusta-count${index+1}`).textContent = contadorMegusta;
    });
});
