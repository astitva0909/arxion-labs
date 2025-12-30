// Elements
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLinks = document.querySelectorAll(".nav-link");

// Open mobile menu
menu.addEventListener("click", () => {
  nav.classList.add("show");
  nav.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
});

// Close mobile menu
closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
  nav.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
});

// Close menu on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    nav.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  });
});

// Optional: close on click outside
nav.addEventListener("click", (e) => {
  if (e.target === nav) {
    nav.classList.remove("show");
    nav.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  }
});

