<?php
header('Content-Type: application/json; charset=utf-8');
include('../espace_du_collaborateur/db.php');

try {
    $stmt = $pdo->query("SELECT * FROM annonces ORDER BY date_annonce DESC");
    $annonces = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($annonces, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erreur SQL: ' . $e->getMessage()]);
}
?>
