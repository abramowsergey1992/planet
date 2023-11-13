import { slideDown, slideUp } from "../../js/globals.js";

document.querySelectorAll(".filter-popup__block").forEach((el) => {
    el.querySelector(".filter-popup__block-title").addEventListener(
        "click",
        function () {
            if (el.classList.contains("_open")) {
                el.classList.remove("_open");
                slideUp(el.querySelector(".filter-popup__block-body"), 500);
            } else {
                el.classList.add("_open");
                slideDown(el.querySelector(".filter-popup__block-body"), 500);
            }
        }
    );
});

