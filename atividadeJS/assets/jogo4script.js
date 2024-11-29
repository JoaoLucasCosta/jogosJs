function calcularGorjeta() {
    
    var valorConta = parseFloat(document.getElementById("valorConta").value);
    var nivelSatisfacao = parseFloat(document.getElementById("nivelSatisfacao").value);

    if (isNaN(valorConta) || valorConta <= 0) {
        alert("Por favor, insira um valor válido para a conta.");
        return;
    }
    
    var gorjeta = (valorConta * nivelSatisfacao) / 100;
    var totalAPagar = valorConta + gorjeta;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <span>Valor da Gorjeta: R$ ${gorjeta.toFixed(2)}</span>
        <span>Total a Pagar: R$ ${totalAPagar.toFixed(2)}</span>
    `;
}