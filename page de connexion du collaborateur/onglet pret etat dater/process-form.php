<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = $_POST['name'];
    $address = $_POST['address'];
    $copro = $_POST['copro'];
    $lot = $_POST['lot'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Adresse email où tu veux recevoir les données
    $to = "raphaelcohen848@gmail.com";

    // Sujet de l'email
    $subject = "Nouvelle demande depuis le formulaire de GestImmo";

    // Contenu de l'email
    $email_content = "Nom: $name\n";
    $email_content .= "Adresse: $address\n";
    $email_content .= "Copropriété: $copro\n";
    if (!empty($lot)) {
        $email_content .= "Numéro de lot: $lot\n";
    }
    $email_content .= "Email: $email\n";
    if (!empty($phone)) {
        $email_content .= "Téléphone: $phone\n";
    }
    $email_content .= "Message: $message\n";

    // Envoi de l'email
    $headers = "From: $email\n";
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirection vers la page de confirmation
        header("Location: confirmation.html");
        exit;
    } else {
        echo "Erreur lors de l'envoi du formulaire.";
    }
}
?>
<?php
        // on pourrait recevoir de la part du serveur une variable signifiant que après l'envoi du formulaire la première fois, quelque chose n'a pas été fait convenablement
        if (isset($_GET["erreur"])){
            echo "<span style='color:red' >";
        echo "erreur de formulaire, vérifiez que les champs sont bien remplis";
            echo "</span>";
            echo "<hr />";
        }
?>
<?

// Validation simple
if (empty($email) || empty($password) || empty($tel)) {
    $erreur = "Veuillez remplir tous les champs.";
} elseif (!preg_match('/^0[1-9][0-9]{8}$/', $tel)) {
    $erreur = "Le numéro de téléphone doit contenir 10 chiffres et commencer par 0.";
} else {
    // Ici on pourrait insérer en base, envoyer un mail, etc.
    echo "<p style='color:green'>Formulaire envoyé avec succès !</p>";
    echo "<ul>";
    echo "<li>Email : " . htmlspecialchars($email) . "</li>";
    echo "<li>Mot de passe : (caché)</li>";
    echo "<li>Téléphone : " . htmlspecialchars($tel) . "</li>";
    echo "</ul>";
    // Si tu veux garder le formulaire visible après succès, ne fais pas exit()
}


echo "nom:";

echo $GET["mail"];
 


?>