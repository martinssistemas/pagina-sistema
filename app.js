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
  
  // Resto do código existente aqui...
  