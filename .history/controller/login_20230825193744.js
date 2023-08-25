// Defina as credenciais cadastradas
var loginCadastrado = "admin";
var senhaCadastrada = "admin";

// Selecione o botão e adicione um event listener
var botao = document.querySelector("#botao");
botao.addEventListener("click", function(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Selecione os campos de login e senha
  var loginInput = document.querySelector("#username");
  var senhaInput = document.querySelector("#password");

  // Obtém os valores dos campos de login e senha
  var loginDigitado = loginInput.value;
  var senhaDigitada = senhaInput.value;

  // Verifica as credenciais
  if (loginDigitado === loginCadastrado && senhaDigitada === senhaCadastrada) {
    console.log("Login bem-sucedido");
  } else {
    console.log("Credenciais inválidas");
  }
});
