document.addEventListener("DOMContentLoaded", () => {
    console.log("Script chargé et DOM prêt");

    const annoncesContainer = document.getElementById("liste-annonces");

    if (annoncesContainer && annoncesData.length > 0) {
        annoncesData.forEach(annonce => {
            const div = document.createElement("div");
            div.classList.add("annonce");

            div.innerHTML = `
                <h2>${annonce.titre}</h2>
                <img src="${annonce.image}" alt="${annonce.titre}" />
                <p><strong>Prix :</strong> ${annonce.prix}</p>
                <p>${annonce.description}</p>
                <button class="btn-details" 
                    data-details="${annonce.description}" 
                    data-img="${annonce.image}" 
                    data-caracteristiques='${JSON.stringify(annonce.caracteristiques)}'>
                    Voir plus
                </button>
            `;

            annoncesContainer.appendChild(div);
        });
    }


    // Liste des images du carrousel
    const images = [
        "#",
        "#",
        "#"
        // Ajoute d'autres images ici si nécessaire
    ];

    let currentImageIndex = 0; // Index de l'image actuelle
    const prevButtons = document.querySelectorAll('.prev');
    const nextButtons = document.querySelectorAll('.next');
    /*
    function nextSlide(btn) {
        const container = btn.closest('.carousel-container');
        const slides = container.querySelectorAll('.carousel-image');
        let current = Array.from(slides).findIndex(img => img.classList.contains('active'));
        slides[current].classList.remove('active');
        let next = (current + 1) % slides.length;
        slides[next].classList.add('active');
    }
    
    function prevSlide(btn) {
        const container = btn.closest('.carousel-container');
        const slides = container.querySelectorAll('.carousel-image');
        let current = Array.from(slides).findIndex(img => img.classList.contains('active'));
        slides[current].classList.remove('active');
        let prev = (current - 1 + slides.length) % slides.length;
        slides[prev].classList.add('active');
    }
    */
    
    function updateImage() {
        if (carouselImage) {
            carouselImage.addEventListener("mouseout", () => {
                intervalId = setInterval(nextSlide, 5000);
            });
        }        
    }

    function nextSlide() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    }

    function prevSlide() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    }
    // Ajouter un événement de clic pour changer d'image sur le carrousel
    nextButtons.forEach(button => button.addEventListener("click", nextSlide));
    prevButtons.forEach(button => button.addEventListener("click", prevSlide));
    

    // Changer l'image automatiquement toutes les 5 secondes (facultatif)
    let intervalId = setInterval(nextSlide, 5000);

    let carouselImage = document.getElementById("carouselImage");
    if (carouselImage) {
        carouselImage.addEventListener("mouseout", () => {
            intervalId = setInterval(nextSlide, 5000);
        });
    }
    updateImage();

    
    //document.getElementById("carousel-image")?.addEventListener("mouseover", ...);


    // Reprendre le carrousel après le survol
    carouselImage.addEventListener("mouseout", () => {
        intervalId = setInterval(nextSlide, 5000);  // Redémarre l'intervalle
    });
    updateImage();// pour afficher la première image au chargement
});


document.addEventListener("DOMContentLoaded", () => {
    // ... ton autre code ...
});

    // Initialiser l'intervalle pour changer la diapositive toutes les 5 secondes
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let intervalId;
    const slideTimeout = 5000; // ← Ajout de cette ligne

    const buttons = document.querySelectorAll(".btn-details");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const popupText = document.getElementById("popup-text");
    const popupCaracteristiques = document.getElementById("popup-caracteristiques");
    const btn = document.querySelector("button[onclick='goBack()']");
    if (btn) {
        btn.addEventListener("click", function () {
            // Action à réaliser lors du clic, si besoin
            // Sinon, laissez vide ou ajoutez un autre code utile
        });
              
    } else {
        console.warn("Bouton goBack introuvable !");
    }

    //const closeBtn = document.querySelector(".close");

    // Ajout des événements sur les boutons "Voir plus"
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            // Récupérer les données de l'annonce à partir des attributs du bouton
            const description = button.getAttribute("data-details");
            const imageSrc = button.getAttribute("data-img");
            const caracteristiquesAttr = button.getAttribute("data-caracteristiques");

            let caracteristiques = {};
            if (caracteristiquesAttr) {
                try {
                    caracteristiques = JSON.parse(caracteristiquesAttr);
                } catch (error) {
                    console.error("Erreur lors du parsing des caractéristiques:", error);
                }
            }

            // Mettre à jour le contenu du pop-up
            popupImg.src = imageSrc;
            popupText.innerText = description;
            popup.style.display = "flex";
            popup.classList.add("show"); // Ajoute la classe pour l'effet fluide

            // Afficher les caractéristiques si elles existent
            if (Object.keys(caracteristiques).length > 0) {
                popupCaracteristiques.innerHTML = `
                    <ul>
                        <li><strong>Surface:</strong> ${caracteristiques.surface}</li>
                        <li><strong>Chambres:</strong> ${caracteristiques.chambres}</li>
                        <li><strong>Étage:</strong> ${caracteristiques.etage}</li>
                        <li><strong>Jardin:</strong> ${caracteristiques.jardin}</li>
                        <li><strong>Parking:</strong> ${caracteristiques.parking}</li>
                    </ul>
                `;
            } else {
                popupCaracteristiques.innerHTML = "<p>Aucune caractéristique disponible.</p>";
            }

            popup.style.display = "flex";
            popup.classList.add("show");
        });
    });

    /*
    // Fermer le pop-up
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Fermer le pop-up si l'utilisateur clique en dehors
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });*/

    // Menu dots
    document.querySelector(".menu-dots").addEventListener("click", () => {
        document.querySelector("nav ul").classList.toggle("show");
    });


// Structure d'annonces
const annoncesData = [
    {
        "id": 1,
        "titre": "Maison Contemporaine",
        "image": "image/64e37bc1612ed9.02100118_maison_vimy.webp",
        "prix": "320 000 €",
        "description": "EXCLUSIVITÉ Stéphane Plaza de CLAMART. Située dans un quartier paisible et familial, cette maison de 140 m² Carrez offre un gros potentiel...",
        "caracteristiques": {
            "surface": "140 m²",
            "chambres": "4 chambres",
            "etage": "1 étage",
            "jardin": "Terrasse",
            "parking": "Garage"
        }
    },
    {
        "id": 2,
        "titre": "Maison d'Architecte",
        "image": "image/images.jpeg",
        "prix": "450 000 €",
        "description": "Ce bien offre un cadre moderne et spacieux, situé dans un quartier recherché...",
        "caracteristiques": {
            "surface": "160 m²",
            "chambres": "5 chambres",
            "etage": "2 étages",
            "jardin": "Jardin paysager",
            "parking": "Double garage"
        }
    },
    // Ajouter les autres annonces ici
];


document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const annonces = document.querySelectorAll(".annonce");
    //const annonceDetail = document.getElementById("annonce-detail");
    const annonceTitle = document.getElementById("annonce-title");
    const annonceImg = document.getElementById("annonce-img");
    const annoncePrice = document.getElementById("annonce-price");
    const annonceDescription = document.getElementById("annonce-description");
    const annonceCaracteristiques = document.getElementById("annonce-caracteristiques");
    const annonceStr = localStorage.getItem('nouvelleAnnonce');
    
    
    annonces.forEach(annonce => {
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property');
      
        const imageSrc = annonce.image && annonce.image.trim() !== ""
          ? annonce.image
          : "images/default.jpg"; // <-- image par défaut si absente
        /*
        propertyDiv.innerHTML = `
          <div class="carousel-container">
            <button onclick="prevSlide(this)" class="carousel-btn prev">Précédent</button>
            <div class="carousel-slides">
              <img class="active" src="${annonce.images?.[0] || 'image/pexels-heyho-8146330.jpg'}" alt="${annonce.titre}">
            </div>
            <button onclick="nextSlide(this)" class="carousel-btn next">Suivant</button>
          </div>
          <div class="info">
            <p>${annonce.titre} - ${annonce.description}</p>
            <p><strong>Type :</strong> ${annonce.type} | <strong>Prix :</strong> ${annonce.prix} €</p>
          </div>
        `;
      
        propertyList.appendChild(propertyDiv);*/
    });
      

    function showAnnonce(id) {
        const annonce = annonces[id - 1];
        annonceTitle.textContent = annonce.querySelector("h2").textContent;
        annonceImg.src = annonce.querySelector("img").src;
        annoncePrice.textContent = annonce.querySelector("p").textContent;
        annonceDescription.textContent = "Description détaillée du bien immobilier.";
        annonceCaracteristiques.innerHTML = "<p>Surface: 120m²</p><p>Chambres: 3</p>";
        annonceDetail.style.display = "block";
    }
    /*
    document.querySelector("button[onclick='goBack()']").addEventListener("click", function () {
        if (annonceDetail) {
            annonceDetail.style.display = "none";
        } else {
            console.warn("annonceDetail introuvable !");
        }
    });*/
    //document.querySelector("#back-button").addEventListener("click", function () {
    //    annonceDetail.style.display = "none";
    //});  
    document.addEventListener("DOMContentLoaded", () => {
        const goBackBtn = document.querySelector("button[onclick='goBack()']");
        if (goBackBtn) {
            goBackBtn.addEventListener("click", function () {
                annonceDetail.style.display = "none";
            });
        }
    });
    
});


function showAnnonce(id) {
    const annonce = annoncesData.find(a => a.id === id);

    // Charger les détails de l'annonce dans la section de détails
    document.getElementById("annonce-title").textContent = annonce.titre;
    document.getElementById("annonce-img").src = annonce.image;
    document.getElementById("annonce-price").textContent = `Prix : ${annonce.prix}`;
    document.getElementById("annonce-description").textContent = annonce.description;

    const caracteristiques = annonce.caracteristiques;
    const caracteristiquesHtml = `
        <ul>
            <li><strong>Surface:</strong> ${caracteristiques.surface}</li>
            <li><strong>Chambres:</strong> ${caracteristiques.chambres}</li>
            <li><strong>Étage:</strong> ${caracteristiques.etage}</li>
            <li><strong>Jardin:</strong> ${caracteristiques.jardin}</li>
            <li><strong>Parking:</strong> ${caracteristiques.parking}</li>
        </ul>
    `;
    document.getElementById("annonce-caracteristiques").innerHTML = caracteristiquesHtml;

    // Masquer la liste des annonces et afficher les détails
    document.querySelector(".annonces").style.display = "none";
    document.getElementById("annonce-detail").style.display = "block";
}

function goBack() {
    const content = document.querySelector(".content");
    if (content) {
        content.style.display = "block";
    } else {
        console.warn(".content introuvable !");
    }

    const carouselContainer = document.querySelector(".carousel-container");
    if (carouselContainer) {
        carouselContainer.style.display = "none";
    } else {
        console.warn(".carousel-container introuvable !");
    }
}


// Filtrer les propriétés par région
const regionLinks = document.querySelectorAll('.regions a');
const properties = document.querySelectorAll('.property');

regionLinks.forEach(link => {
    link.addEventListener('click', e => {
    e.preventDefault(); // empêche le # de remonter
    const region = link.dataset.region;

    properties.forEach(property => {
        if (property.dataset.region === region) {
        property.style.display = 'block';
        } else {
        property.style.display = 'none';
        }
    });
    });
});

function nextSlide(btn) {
    console.log("Bouton Suivant cliqué !");
    const container = btn.closest('.carousel-container');
    const slides = container.querySelectorAll('.carousel-image');
    let current = Array.from(slides).findIndex(img => img.classList.contains('active'));
    if (current === -1) current = 0; // Sécurité si aucune image n'est active
    slides[current].classList.remove('active');
    let next = (current + 1) % slides.length;
    slides[next].classList.add('active');
}

function prevSlide(btn) {
    console.log("Bouton Précédent cliqué !");
    const container = btn.closest('.carousel-container');
    const slides = container.querySelectorAll('.carousel-image');
    let current = Array.from(slides).findIndex(img => img.classList.contains('active'));
    if (current === -1) current = 0;
    slides[current].classList.remove('active');
    let prev = (current - 1 + slides.length) % slides.length;
    slides[prev].classList.add('active');
}

// annonce.js

// Récupère l'ID dans l'URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

// Données simulées
const annonces = [
  {
    id: "1",
    titre: "Appartement à Paris",
    description: "Charmant appartement de 45m² proche du métro.",
    prix: "1200€/mois"
  },
  {
    id: "2",
    titre: "Maison à Lyon",
    description: "Maison familiale avec jardin et garage.",
    prix: "320 000€"
  },
  {
    id: "3",
    titre: "Studio à Marseille",
    description: "Studio rénové à deux pas du Vieux-Port.",
    prix: "600€/mois"
  }
];

// Cherche l'annonce par ID
const annonce = annonces.find(a => a.id === id);

// Affiche les infos
if (annonce) {
  document.getElementById("titre").textContent = annonce.titre;
  document.getElementById("description").textContent = annonce.description;
  document.getElementById("prix").textContent = annonce.prix;
} else {
  document.body.innerHTML = "<h2>Annonce introuvable</h2><a href='index.html'>Retour à la liste</a>";
}
