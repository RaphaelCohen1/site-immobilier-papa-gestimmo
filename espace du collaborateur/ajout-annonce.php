<?php
session_start();
if (!isset($_SESSION['user'])) {
  header("Location: ../espace_du_collaborateur/login.html"); // Redirige vers login si pas connecté
  exit();
}

$user = $_SESSION['user']; // Contient nom, email, téléphone...
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Ajouter une annonce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style8.css">
    </head>
    <body>
        <div class="form-container">
            <h1>Ajouter une annonce</h1>

            <form id="form-annonce" onsubmit="ajouterAnnonce(event)"  method="POST" enctype="multipart/form-data">
                <label for="titre">Titre de l'annonce</label>
                <input type="text" id="titre" name="titre" required>

                <label for="description">Description</label>
                <textarea id="description" name="description" rows="5" required></textarea>

                <label for="type">Type de bien</label>
                <select id="type" name="type" required>
                    <option value="">-- Choisir --</option>
                    <option value="Appartement">Appartement</option>
                    <option value="Maison">Maison</option>
                    <option value="Terrain">Terrain</option>
                    <option value="Local commercial">Local commercial</option>
                    <option value="Bureau">Bureau</option>
                    <option value="Parking">Parking</option>
                </select>

                <label for="prix">Prix (€)</label>
                <input type="number" id="prix" name="prix" required min="0">

                <label for="image">Ajouter jusqu'à 3 images</label>
                <input type="file" id="image" name="image" accept="image/*">
                <small>Maximum 3 images</small>

                <!-- Cette div est obligatoire pour afficher les aperçus -->
                <div id="imagePreview" style="margin-top: 10px;"></div>

                <!-- Affichage des infos du collaborateur (visible) -->
                <div class="collaborateur-info">
                    <p>Annonce publiée par : <strong><?= htmlspecialchars($user['nom']) ?></strong></p>
                    <p>Email : <?= htmlspecialchars($user['email']) ?></p>
                    <p>Téléphone : <?= htmlspecialchars($user['telephone']) ?></p>
                </div>

                <!-- Champs cachés pour récupération par JavaScript -->
                <input type="hidden" id="collab-nom" value="<?= htmlspecialchars($user['nom']) ?>">
                <input type="hidden" id="collab-email" value="<?= htmlspecialchars($user['email']) ?>">
                <input type="hidden" id="collab-telephone" value="<?= htmlspecialchars($user['telephone']) ?>">

                <button type="submit">Publier l'annonce</button>
            </form>

            <a href="<?= '/travail/site_immobilier_pour_papa/espace_du_collaborateur/index.html' ?>" class="btn-action logout" style="margin-top:2rem;">
                ⬅ Retour à l'espace
            </a>
        </div>

        <script src="script.js"></script>
    </body>
</html>