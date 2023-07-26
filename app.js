// Função para buscar os usuários cadastrados no LocalStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Buscar os usuários cadastrados
  var users = getUsers();

  // Verificar se o email e a senha correspondem a algum usuário cadastrado
  var user = users.find(function(user) {
    return user.email === email && user.password === password;
  });

  if (user) {
    alert("Login bem-sucedido! Redirecionando para a página principal.");
    window.location.href = "janela.html"; // Redirecionar para a página após o login ser aprovado
  } else {
    alert("Login inválido. Por favor, verifique suas credenciais.");
  }
}

function createAccount() {
  var newEmail = document.getElementById("newEmail").value;
  var newPassword = document.getElementById("newPassword").value;

  // Verificar se o email e senha estão preenchidos
  if (!newEmail || !newPassword) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Buscar os usuários cadastrados
  var users = getUsers();

  // Verificar se o email já está cadastrado
  var existingUser = users.find(function(user) {
    return user.email === newEmail;
  });

  if (existingUser) {
    alert("Este email já está cadastrado. Por favor, escolha outro.");
  } else {
    // Criar novo usuário e salvar no LocalStorage
    var newUser = {
      email: newEmail,
      password: newPassword
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Conta criada com sucesso! Faça login para acessar a página principal.");
    window.location.href = "index.html"; // Redirecionar para a página de login após criar a conta
  }
}
