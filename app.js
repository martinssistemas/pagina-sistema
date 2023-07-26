// Função para realizar o login
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Verificar se os campos estão preenchidos
  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, preencha o email e a senha.");
    return false;
  }

  // Verificar se o email e senha correspondem a um usuário registrado
  // Neste exemplo, vamos assumir que o email e senha corretos são "usuario@exemplo.com" e "123456"
  if (email === "usuario@exemplo.com" && password === "123456") {
    // Redirecionar para a página do portfólio
    window.location.href = "portifolio.html";
    // Retornar false para evitar que o formulário seja enviado (evita recarregar a página)
    return false;
  } else {
    alert("Credenciais inválidas. Por favor, verifique o email e a senha.");
    return false;
  }
}



