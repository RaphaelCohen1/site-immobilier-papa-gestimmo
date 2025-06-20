//Script pour le menu burger 
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('.main-nav');
  
  burger.addEventListener('click', function() {
    // Basculer l'état actif
    this.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Mettre à jour l'attribut ARIA
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
  });
  
  // Fermer le menu quand on clique sur un lien
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
});
