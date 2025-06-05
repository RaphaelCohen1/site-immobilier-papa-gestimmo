function handleFormSubmit(e) {
    e.preventDefault();
  
    const titre = document.getElementById('titre').value;
    const description = document.getElementById('description').value;
    const type = document.getElementById('type').value;
    const prix = document.getElementById('prix').value;
  
    const nouvelleAnnonce = {
      titre,
      description,
      type,
      prix
    };
  
    // Récupérer les annonces existantes ou un tableau vide
    const annonces = JSON.parse(localStorage.getItem('annonces')) || [];
  
    // Ajouter la nouvelle annonce
    annonces.push(nouvelleAnnonce);
  
    // Enregistrer dans localStorage
    localStorage.setItem('annonces', JSON.stringify(annonces));
  
    alert(`Annonce "${titre}" ajoutée !`);
  
    // Rediriger vers l'espace collaborateur ou une autre page
    window.location.href = "espace-collaborateur.html";
  }

  // Récupérer les annonces dans localStorage
  const annonces = JSON.parse(localStorage.getItem('annonces')) || [];

  const propertyList = document.querySelector('.property-list');

  // Vider les annonces statiques si tu veux les remplacer par celles des agents
  propertyList.innerHTML = '';

  if (annonces.length === 0) {
    propertyList.innerHTML = '<p>Aucune annonce pour le moment.</p>';
  } else {
    annonces.forEach(annonce => {
      // Créer le div property pour chaque annonce
      const propertyDiv = document.createElement('div');
      propertyDiv.classList.add('property');

      // Tu peux adapter ce template HTML selon tes besoins (images, descriptions, etc.)
      propertyDiv.innerHTML = `
        <img src="${annonce.image || 'image/default.jpg'}" alt="${annonce.titre}">
        <div class="info">
          <p>${annonce.titre} - ${annonce.description}</p>
          <p><strong>Type :</strong> ${annonce.type} | <strong>Prix :</strong> ${annonce.prix} €</p>
        </div>
      `;

      propertyList.appendChild(propertyDiv);
    });
  }

  const image = document.getElementById('image').value || 'image/default.jpg';

  const nouvelleAnnonce = {
    titre,
    description,
    type,
    prix,
    image
  };
  