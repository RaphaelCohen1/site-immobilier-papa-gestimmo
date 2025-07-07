function moveIndicator(index) {
            const indicator = document.querySelector(".active-indicator");
            const buttons = document.querySelectorAll(".toggle-button");
            
indicator.style.left = `calc(${index * 33.3}% + 5px)`;
            
            buttons.forEach(btn => btn.classList.remove("active"));
            buttons[index].classList.add("active");
}
//selecteur type de transaction: location...
document.querySelectorAll('.input-select').forEach(select => {
    select.addEventListener('focus', function () {
        this.style.borderColor = '#007bff';
    });

    select.addEventListener('blur', function () {
        this.style.borderColor = '#ccc';
    });
});

// Fonction pour afficher/masquer le menu de navigation
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

// Réinitialise le menu si on repasse sur un grand écran
window.addEventListener("resize", () => {
    const navMenu = document.getElementById("navMenu");

    if (window.innerWidth > 768) {
    navMenu.classList.remove("show"); // enlève le mode mobile
    navMenu.style.display = "flex";   // réaffiche en mode ligne
    } else {
    navMenu.style.display = ""; // laisse le CSS gérer le display (none ou flex via les media queries)
    }
});
/*  
burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    burgerBtn.classList.toggle('active');
});*/
