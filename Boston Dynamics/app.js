const menuIcon = document.querySelector(".menu");
const navbar = document.querySelector(".navbar-elm");
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
