// Função para redirecionar para a página de portfólio após o login ser aprovado
function redirectToPortfolio() {
  window.location.href = "portifolio.html";
}

// Função para verificar se o usuário está logado
function isUserLoggedIn() {
  return localStorage.getItem('loggedIn') === 'true';
}

// Função para realizar o login
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
    // Marcar o usuário como logado no localStorage
    localStorage.setItem('loggedIn', 'true');
    // Redirecionar para a página principal (portfólio)
    redirectToPortfolio();
  } else {
    alert("Credenciais inválidas. Por favor, verifique o email e a senha.");
  }
}

// Função para realizar o registro
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

}


