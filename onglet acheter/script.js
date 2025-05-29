document.addEventListener("DOMContentLoaded", () => {
    console.log("Script chargé et DOM prêt");

    // Liste des images du carrousel
    const images = [
        "image/pexels-heyho-8146330.jpg",
        "image/pexels-heyho-8146331.jpg",
        "image/pexels-heyho-8146332.jpg"
        // Ajoute d'autres images ici si nécessaire
    ];

    let currentImageIndex = 0; // Index de l'image actuelle
    const carouselImage = document.getElementById("carouselImage");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    // Fonction pour changer l'image
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        carouselImage.src = images[currentImageIndex];
    }

    // Fonction pour aller à l'image précédente
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        carouselImage.src = images[currentImageIndex];
    }

    // Ajouter un événement de clic pour changer d'image sur le carrousel
    next.addEventListener("click", changeImage);
    prev.addEventListener("click", prevImage);

    // Changer l'image automatiquement toutes les 5 secondes (facultatif)
    let intervalId = setInterval(changeImage, 5000);

    // Mettre en pause le carrousel au survol de l'image
    carouselImage.addEventListener("mouseover", () => {
        clearInterval(intervalId);  // Stoppe l'intervalle
    });

    // Reprendre le carrousel après le survol
    carouselImage.addEventListener("mouseout", () => {
        intervalId = setInterval(changeImage, 5000);  // Redémarre l'intervalle
    });
});




    // Fonction pour afficher une diapositive spécifique
    function showSlide(index) {
        currentSlide = (index + $slides.length) % $slides.length;  // Gérer l'index circulaire
        $slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    }

    // Fonction pour aller à la diapositive suivante
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Fonction pour aller à la diapositive précédente
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Ajouter des écouteurs d'événements pour les boutons de contrôle
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    // Initialiser l'intervalle pour changer la diapositive toutes les 5 secondes
    intervalId = setInterval(nextSlide, slideTimeout);

    // Gérer la mise en pause du carrousel au survol
    $slides.forEach(slide => {
        slide.addEventListener('mouseover', () => {
            clearInterval(intervalId);  // Stoppe l'intervalle
        });
        slide.addEventListener('mouseout', () => {
            intervalId = setInterval(nextSlide, slideTimeout);  // Redémarre l'intervalle
        });
    });

    const buttons = document.querySelectorAll(".btn-details");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const popupText = document.getElementById("popup-text");
    const popupCaracteristiques = document.getElementById("popup-caracteristiques");
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

    // Menu toggle
    document.querySelector(".menu-toggle").addEventListener("click", () => {
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
    const annonceDetail = document.getElementById("annonce-detail");
    const annonceTitle = document.getElementById("annonce-title");
    const annonceImg = document.getElementById("annonce-img");
    const annoncePrice = document.getElementById("annonce-price");
    const annonceDescription = document.getElementById("annonce-description");
    const annonceCaracteristiques = document.getElementById("annonce-caracteristiques");
    
    annonces.forEach((annonce, index) => {
        annonce.addEventListener("click", () => showAnnonce(index + 1));
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
    
    document.querySelector("button[onclick='goBack()']").addEventListener("click", function () {
        annonceDetail.style.display = "none";
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
    // Revenir à la liste des annonces
    document.querySelector(".annonces").style.display = "block";
    document.getElementById("annonce-detail").style.display = "none";
}
