const navbarNav = document.querySelector(".navbar .navbar-nav");
const hamburgeMenu = document.querySelector(".menu");

hamburgeMenu.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
  e.preventDefault();
});

document.addEventListener("click", function (e) {
  if (!hamburgeMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
