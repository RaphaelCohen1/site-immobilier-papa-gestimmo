<?php
require __DIR__ . '/vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validation des données
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $name = htmlspecialchars($_POST['name'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');
    $address = htmlspecialchars($_POST['address'] ?? '');
    $copro = htmlspecialchars($_POST['copro'] ?? '');
    $lot = htmlspecialchars($_POST['lot'] ?? '');
    $phone = htmlspecialchars($_POST['phone'] ?? '');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("❌ Email invalide");
    }

    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = 0; // 3 pour debug, 0 en prod
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'raphaelcohen848@gmail.com';
        $mail->Password = 'ttzy netq jsdt qqyx'; // À mettre dans .env !
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Expéditeur et destinataire
        $mail->setFrom($email, $name);
        $mail->addAddress('raphaelcohen848@gmail.com');
        $mail->addReplyTo($email, $name);

        $mail->Subject = 'Nouvelle demande - ' . $copro;
        $mail->isHTML(true);
        $mail->Body = " <h2>Nouvelle demande de contact</h2><p><strong>Nom complet :</strong> $name</p>
            <p><strong>Adresse du bien :</strong> $address</p>
            <p><strong>Copropriété :</strong> $copro</p>
            " . (!empty($lot) ? "<p><strong>Numéro de lot :</strong> $lot</p>" : "") . "
            <p><strong>Email :</strong> $email</p>
            " . (!empty($phone) ? "<p><strong>Téléphone :</strong> $phone</p>" : "") . "
            " . (!empty($message) ? "<p><strong>Message :</strong><br>$message</p>" : "") . "
        ";
        // Version texte brut (alternative)
        $mail->AltBody = "
            Nouvelle demande de contact
            --------------------------
            Nom complet : $name
            Adresse du bien : $address
            Copropriété : $copro
            " . (!empty($lot) ? "Numéro de lot : $lot\n" : "") . "
            Email : $email
            " . (!empty($phone) ? "Téléphone : $phone\n" : "") . "
            " . (!empty($message) ? "Message :\n$message" : "") . "
        ";

        // Envoi
        $mail->send();
        echo '✅ Message envoyé avec succès !';
    } catch (Exception $e) {
        echo "❌ Erreur lors de l'envoi : " . $mail->ErrorInfo;
    }
}
?>