<?php

$nom = $_POST['nom'];
$prenom = $_POST['prenom']
$email = $_POST['email'];
$message = $_POST['message'];

$to = "bonifacetanga@gmail.com";
$subject = "Message COMMERCE";

$content = "Nom: $nom\nEmail: $email\nMessage: $message";

mail($to, $subject, $content);

echo "Message envoyé avec succès !";

?>