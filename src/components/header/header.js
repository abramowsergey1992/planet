if (document.querySelector(".header")) {
    let menu = document.querySelector(".main-menu");
    let links = document.querySelectorAll(".main-menu__menu a");
    let submenu = document.querySelectorAll(".main-menu__sub");
    let overlay = document.querySelector(".header__overlay");
    let header = document.querySelector(".header");
    let burger = document.querySelector(".header__burger");
    let clock = document.querySelectorAll(".js-moscow-time");
    let isMobile = "ontouchstart" in window;

    document.querySelectorAll(".js-close-menu").forEach((el) => {
        el.addEventListener("click", function (event) {
            document
                .querySelector(".main-menu__sub._active")
                .classList.remove("_active");
            links.forEach((el) => el.classList.remove("_active"));
        });
    });

    burger.addEventListener("click", function () {
        if (document.body.classList.contains("_burger-menu-open")) {
            document.body.classList.remove("_burger-menu-open");
            header.classList.remove("_overlay-visible");
        } else {
            document.body.classList.add("_burger-menu-open");
        }
    });

    if (isMobile) {
        overlay?.addEventListener("click", function () {
            header.classList.remove("_overlay-visible");
            document.body.classList.remove("_burger-menu-open");
            document
                .querySelector(".main-menu__sub._active")
                .classList.remove("_active");
        });
    } else {
        menu?.addEventListener("mouseleave", () => {
            if (window.innerWidth < 1201) {
                return;
            }
            header.classList.remove("_overlay-visible");
            document.body.classList.remove("_burger-menu-open");
            document
                .querySelector(".main-menu__sub._active")
                ?.classList.remove("_active");
            links.forEach((el) => {
                el.classList.remove("_active");
            });
        });
    }

    links.forEach((el) => {
        el.addEventListener("click", function (event) {
            event.preventDefault();

            if (!isMobile && window.innerWidth > 1200) {
                return;
            }

            if (el.classList.contains("_active")) {
                links.forEach((el) => {
                    el.classList.remove("_active");
                });
                submenu.forEach((el) => {
                    el.classList.remove("_active");
                });
                el.classList.remove("_active");
                header.classList.remove("_overlay-visible");
                document
                    .querySelector(el.dataset.sub)
                    .classList.remove("_active");
            } else {
                links.forEach((el) => {
                    el.classList.remove("_active");
                });
                submenu.forEach((el) => {
                    el.classList.remove("_active");
                });
                el.classList.add("_active");
                header.classList.add("_overlay-visible");
                document.querySelector(el.dataset.sub).classList.add("_active");
            }
        });

        el.addEventListener("mouseenter", function (event) {
            if (isMobile || window.innerWidth < 1201) {
                return;
            }
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

    // Current Moscow time
    function updateClock() {
        const string = new Date().toLocaleTimeString("ru-RU", {
            timeZone: "Europe/Moscow",
            hour: "2-digit",
            minute: "2-digit",
        });

        clock.forEach((el) => {
            el.innerHTML = string;
        });

        setTimeout(() => {
            updateClock();
        }, 1000);
    }

    if (clock.length) {
        updateClock();
    }
}

