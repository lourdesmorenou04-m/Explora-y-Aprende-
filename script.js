function checkAnswer(answer) {
    const feedbackElement = document.getElementById('feedback');

    if (answer === 'sol') {
        feedbackElement.textContent = '¡Correcto! El Sol es nuestra fuente principal de energía.';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = 'Incorrecto. ¡Sigue explorando!';
        feedbackElement.style.color = 'red';
    }
}
/* =======================================
// LOGICA PARA EL CONTADOR EN TECNOLOGIA.HTML
========================================*/

// 1. Declaramos la variable global 'contador' y le damos un valor inicial de 0.
let contador = 0;

// 2. Definimos la función que aumenta la variable.
function incrementarContador() {
    contador = contador + 1; // Suma 1 a la variable actual.

    // Actualiza el texto en la página con el nuevo valor.
    document.getElementById('contadorDisplay').textContent = contador;
}

// 3. Esperamos a que la página cargue para agregar el "escuchador" de clics al botón.
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el botón por su ID
    const boton = document.getElementById('botonIncrementar');

    // Si el botón existe (estamos en la página de Tecnologia), le asignamos la función.
    if (boton) {
        boton.addEventListener('click', incrementarContador);
    }
});
