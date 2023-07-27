<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "bruno.martinssistemas@gmail.com"; // Coloque o e-mail de destino aqui
    $subject = "Contato de $name";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    // Redirecionar para uma página de confirmação ou exibir uma mensagem de sucesso
    header("Location: confirmacao.html");
}
?>
