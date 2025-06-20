function getParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
  

const id = parseInt(getParam('id')); // on convertit en nombre
const annonces = JSON.parse(localStorage.getItem("annonces")) || [];
const annonce = annonces.find(a => a.id === id);
const container = document.getElementById('detail-container'); 

if (annonce) {
  container.innerHTML = `
    <h1>${annonce.titre}</h1>
    <div class="annonce-layout">
      <div class="images-container">
      ${annonce.images.map(img => `<img src="${img}" alt="photo du bien">`).join('')}
      </div>
      <div class="info-container">
        <h2>Description</h2>
        <p class="info-item">${annonce.description}</p>
        <h2>Détails</h2>
        <p class="info-item"><strong>Prix :</strong> ${annonce.prix}</p>
      </div>
    </div>
  `;
} else {
  container.innerHTML = '<p class="not-found">Annonce non trouvée ou identifiant invalide.</p>';
}
