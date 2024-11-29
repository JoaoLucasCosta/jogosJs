function calcularResultado() {

    let nome = document.getElementById("nome").value;
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;
    let falta = document.getElementById("falta").value;


    if (nome === "" || nota1 === "" || nota2 === "" || nota3 === "" || falta === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

  
    let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

    let resultado = "";
    let resultadoClass = "";

    if (media >= 7 && falta < 25) {
        resultado = "Aluno aprovado!";
        resultadoClass = "success";
    } else if (media < 7 && media >= 5 && falta < 25) {
        resultado = "Recuperação";
        resultadoClass = "warning";
    } else if (media < 5 || falta >= 25) {
        resultado = "Aluno reprovado!";
        resultadoClass = "error";
    }

    document.getElementById("resultado").innerHTML = `
        <strong>${nome}</strong><br>
        Média: ${media.toFixed(2)}<br>
        Faltas: ${falta}%<br><br>
        <span class="${resultadoClass}">${resultado}</span>
    `;
}