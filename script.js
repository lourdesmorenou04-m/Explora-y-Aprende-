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
