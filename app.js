// Buscar os usuários registrados do localStorage quando o script é carregado
var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Verificar se os campos estão preenchidos
  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, preencha o email e a senha.");
    return;
  }

  // Verificar se o email e senha correspondem a um usuário registrado
  var foundUser = registeredUsers.find(function(user) {
    return user.email === email && user.password === password;
  });

  if (foundUser) {
    // Redirecionar para a página principal (portfólio)
    window.location.href = "portifolio.html";
  } else {
    alert("Credenciais inválidas. Por favor, verifique o email e a senha.");
  }
}

function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Verificar se os campos estão preenchidos
  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, preencha o email e a senha para criar uma conta.");
    return;
  }

  // Verificar se o email já está registrado
  var isEmailRegistered = registeredUsers.some(function(user) {
    return user.email === email;
  });

  if (isEmailRegistered) {
    alert("Este email já está registrado. Por favor, faça o login.");
  } else {
    // Registrar o novo usuário e salvar no localStorage
    registeredUsers.push({ email: email, password: password });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    alert("Conta criada com sucesso! Faça o login para acessar a página principal.");
    // Redirecionar para a página de login após o registro ser concluído
    window.location.href = "index.html";
  }
}

