// Função para realizar o login
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Verificar se os campos estão preenchidos
  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, preencha o email e a senha.");
    return false;
  }

  // Obter as contas registradas do localStorage
  var accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  // Verificar se o email e senha correspondem a um usuário registrado
  var foundAccount = accounts.find(function(account) {
    return account.email === email && account.password === password;
  });

  if (foundAccount) {
    // Redirecionar para a página do portfólio
    window.location.href = "portifolio.html";
    // Retornar false para evitar que o formulário seja enviado (evita recarregar a página)
    return false;
  } else {
    alert("Credenciais inválidas. Por favor, verifique o email e a senha.");
    return false;
  }
}

// Função para realizar o registro
function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Verificar se os campos estão preenchidos
  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, preencha o email e a senha para criar uma conta.");
    return false;
  }

  // Obter as contas registradas do localStorage
  var accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  // Verificar se o email já está registrado
  var isEmailRegistered = accounts.some(function(account) {
    return account.email === email;
  });

  if (isEmailRegistered) {
    alert("Este email já está registrado. Por favor, faça o login.");
    return false;
  } else {
    // Registrar o novo usuário e salvar no localStorage
    accounts.push({ email: email, password: password });
    localStorage.setItem('accounts', JSON.stringify(accounts));
    alert("Conta criada com sucesso! Faça o login para acessar a página principal.");
    // Redirecionar para a página de login após o registro ser concluído
    window.location.href = "index.html";
    return false;
  }
}



