// Tableau pour stocker les images sélectionnées
const imagesArray = [];

// Récupération de l'input et de la zone de preview
const imageInput = document.getElementById('image');
const previewContainer = document.getElementById('imagePreview');

// Quand une image est sélectionnée
imageInput.addEventListener('change', function (event) {
  const file = event.target.files[0];

  if (!file) return;

  if (imagesArray.length >= 3) {
    alert("Vous ne pouvez ajouter que 3 images maximum.");
    imageInput.value = ''; // Reset input
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    // Ajoute l’image en base64 au tableau
    imagesArray.push(e.target.result);

    // Affiche l’image
    const img = document.createElement('img');
    img.src = e.target.result;
    img.classList.add('preview-image');
    img.style.maxWidth = '150px';
    img.style.margin = '5px';
    previewContainer.appendChild(img);
  };

  reader.readAsDataURL(file);
  imageInput.value = ''; // Permet de recharger la même image si besoin
});

function ajouterAnnonce(event) {
  event.preventDefault();

  if (imagesArray.length === 0) {
    alert("Veuillez ajouter au moins une image.");
    return;
  }

  const nouvelleAnnonce = {
    id: Date.now(),
    titre: document.getElementById('titre').value,
    description: document.getElementById('description').value,
    type: document.getElementById('type').value,
    prix: document.getElementById('prix').value,
    date: new Date().toLocaleDateString('fr-FR'),
    images: imagesArray
  };

  let annonces = JSON.parse(localStorage.getItem('annonces')) || [];
  annonces.push(nouvelleAnnonce);
  localStorage.setItem('annonces', JSON.stringify(annonces));

  // Redirection
  window.location.href = "/site immobilier pour papa/onglet acheter/index.html?success=1";
}
