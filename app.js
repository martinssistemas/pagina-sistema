// Dados temporários de usuários registrados (substitua isso com a lógica do backend e banco de dados em um ambiente de produção real)
var registeredUsers = [
  { email: "usuario@exemplo.com", password: "senha123" },
  // Adicione mais usuários aqui se necessário
];

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, preencha o email e a senha.");
    return;
  }

  // Verificar se as credenciais correspondem a uma conta registrada (substitua esta lógica com uma chamada ao backend para verificar as credenciais)
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

  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, preencha o email e a senha para criar uma conta.");
    return;
  }

  // Verificar se o email já está registrado (substitua esta lógica com uma chamada ao backend para verificar o email)
  var isEmailRegistered = registeredUsers.some(function(user) {
    return user.email === email;
  });

  if (isEmailRegistered) {
    alert("Este email já está registrado. Por favor, faça o login.");
  } else {
    // Registrar o novo usuário (substitua esta lógica com a chamada ao backend para salvar os dados do novo usuário)
    registeredUsers.push({ email: email, password: password });
    alert("Conta criada com sucesso! Faça o login para acessar a página principal.");
    // Redirecionar para a página de login após o registro ser concluído
    window.location.href = "index.html";
  }
}
