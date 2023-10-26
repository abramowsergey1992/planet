let links = document.querySelectorAll(".main-menu__menu a");
let submenu = document.querySelectorAll(".main-menu__sub");
let overlay = document.querySelector(".header__overlay");
let header = document.querySelector(".header");
let burger = document.querySelector(".header__burger");

document.querySelectorAll(".js-close-menu").forEach((el) => {
    el.addEventListener("click", function (event) {
        document
            .querySelector(".main-menu__sub._active")
            .classList.remove("_active");
    });
});
links.forEach((el) => {
    el.addEventListener("click", function (event) {
        event.preventDefault();
        links.forEach((el) => {
            el.classList.remove("_active");
        });
        submenu.forEach((el) => {
            el.classList.remove("_active");
        });
        el.classList.add("_active");
        header.classList.add("_overlay-visible");
        document.querySelector(el.dataset.sub).classList.add("_active");
    });
});
overlay.addEventListener("click", function () {
    header.classList.remove("_overlay-visible");
    document.body.classList.remove("_burger-menu-open");
    document
        .querySelector(".main-menu__sub._active")
        .classList.remove("_active");
});
burger.addEventListener("click", function (event) {
    document.body.classList.toggle("_burger-menu-open");
});

