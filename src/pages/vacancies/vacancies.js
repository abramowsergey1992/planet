import { slideDown, slideUp } from "../../js/globals.js";

document.querySelectorAll(".vacancy").forEach((el) => {
    el.querySelector(".vacancy__top").addEventListener(
        "click",
        function (vacancy) {
            if (el.classList.contains("_open")) {
                el.classList.remove("_open");
                slideUp(el.querySelector(".vacancy__body"), 500);
            } else {
                el.classList.add("_open");
                slideDown(el.querySelector(".vacancy__body"), 500);
            }
        }
    );
});

