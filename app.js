function login() {
  // Aqui você pode implementar a lógica de login, verificando as credenciais do usuário no banco de dados.
  // Por simplicidade, vamos apenas verificar se o email e a senha são preenchidos.
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, preencha o email e a senha.");
    return;
  }

  // Verificar se as credenciais correspondem a uma conta registrada (substitua esta lógica com uma chamada ao banco de dados)
  var registeredEmail = "usuario@exemplo.com";
  var registeredPassword = "senha123";

  if (email === registeredEmail && password === registeredPassword) {
    // Redirecionar para a página principal (portfólio)
    window.location.href = "portifolio.html";
  } else {
    alert("Credenciais inválidas. Por favor, verifique o email e a senha.");
  }
}

function register() {
  // Aqui você pode implementar a lógica de registro de usuário, salvando as informações do novo usuário no banco de dados.
  // Por simplicidade, vamos apenas verificar se o email e a senha são preenchidos.
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, preencha o email e a senha para criar uma conta.");
    return;
  }

  // Resto da lógica de registro
}

