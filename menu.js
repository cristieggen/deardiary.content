const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Cierra el menú al hacer click en un link
menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

