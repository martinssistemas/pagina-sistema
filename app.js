// Função que é chamada após o usuário fazer login com o Google
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var email = profile.getEmail();

  // Aqui, você pode verificar se o email recebido existe no seu sistema ou não.
  // Se existir, você pode permitir o login. Caso contrário, exiba uma mensagem de erro ou crie uma conta para o usuário.

  // Exemplo de verificação do email no sistema (usando o LocalStorage apenas para fins educacionais):
  var users = getUsersFromLocalStorage();
  var user = users.find(function(user) {
    return user.email === email;
  });

  if (user) {
    // Email existe no sistema, permita o login
    alert("Login com Google bem-sucedido! Redirecionando para a página principal.");
    window.location.href = "janela.html"; // Redirecionar para a página após o login ser aprovado
  } else {
    // Email não existe no sistema, exiba uma mensagem de erro ou crie uma conta para o usuário.
    alert("Você não possui uma conta registrada. Faça login com outra conta ou crie uma nova conta.");
  }
}

// Função para buscar os usuários cadastrados no LocalStorage (apenas para fins educacionais)
function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Resto do código existente aqui...

