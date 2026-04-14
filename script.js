let menuBtn = document.querySelector(".menu-toggle");
let navMenu = document.querySelector(".navigations");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
});