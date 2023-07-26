function login() {
  // Aqui você pode implementar a lógica de login, verificando as credenciais do usuário no banco de dados.
  // Por simplicidade, vamos apenas verificar se o email e a senha são preenchidos.
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, preencha o email e a senha.");
    return;
  }

  // Resto da lógica de login
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


