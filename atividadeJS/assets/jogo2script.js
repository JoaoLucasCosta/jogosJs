function checkLeapYear() {
    let year = Number(document.getElementById('year').value);
    let resultElement = document.getElementById('result');

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        resultElement.textContent = "O ano é bissexto!";
        resultElement.className = "result";
    } else {
        resultElement.textContent = "O ano não é bissexto.";
        resultElement.className = "result error";
    }
}