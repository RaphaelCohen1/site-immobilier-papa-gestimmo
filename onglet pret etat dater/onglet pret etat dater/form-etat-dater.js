document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".main-nav");
  const closeBtn = document.querySelector(".close-btn");
  const body = document.body;

  burger.addEventListener("click", () => {
    console.log("👉 Burger cliqué"); // ✅ Tu peux mettre ce log ici
    body.classList.add("menu-open");
    burger.setAttribute("aria-expanded", "true");
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
      menu.classList.remove("show");
      body.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
  });

  // Fermer le menu si on clique à l'extérieur
  document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && e.target !== burger) {
          menu.classList.remove("active");
          body.classList.remove("active");
          burger.setAttribute("aria-expanded", "false");
      }
  });
});