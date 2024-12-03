 // Senha correta definida no código
 const CORRECT_PASSWORD = "123456";

 // Captura elementos
 const passwordInput = document.getElementById("password");
 const verifyBtn = document.getElementById("verify-btn");
 const resultDiv = document.getElementById("result");

 // Adiciona evento de clique no botão
 verifyBtn.addEventListener("click", () => {
   const enteredPassword = passwordInput.value;

   // Verifica se a senha está correta
   if (enteredPassword === CORRECT_PASSWORD) {
     resultDiv.textContent = "Senha correta!";
     resultDiv.className = "success";
   } else {
     resultDiv.textContent = "Senha incorreta.";
     resultDiv.className = "error";
   }
 });