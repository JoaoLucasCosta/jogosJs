let numeroEscolhido = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let numeroUsuario = Number(document.getElementById('guess').value);
    let resultElement = document.getElementById('result');

    if (numeroUsuario === numeroEscolhido) {
        resultElement.textContent = "Parabéns, você acertou!";
        resultElement.className = "result";
    } else {
        resultElement.textContent = "Tente novamente! O número era " + numeroEscolhido;
        resultElement.className = "result error";
    }
}