const header = document.querySelector(".hero-header");
const leftNav = document.querySelector(".left-nav");
const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelectorAll(".nav-link");
const isOnMobile = window.innerWidth <= 768;

let isHamburgerClicked = false;
toggleBgBlur = () => {
  isHamburgerClicked = !isHamburgerClicked;
  isHamburgerClicked
    ? header.classList.remove("blurred-bg")
    : header.classList.add("blurred-bg");
};

hamburger.addEventListener("click", function() {
  toggleBgBlur();
  leftNav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function() {
    toggleBgBlur();
    leftNav.classList.remove("active");
  });
});
