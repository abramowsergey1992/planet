import { slideDown, slideUp } from "../../js/globals.js";

document.querySelectorAll(".faq").forEach((el) => {
    el.querySelector(".faq__head").addEventListener("click", function (faq) {
        if (el.classList.contains("_open")) {
            el.classList.remove("_open");
            slideUp(el.querySelector(".faq__body"), 500);
        } else {
            el.classList.add("_open");
            slideDown(el.querySelector(".faq__body"), 500);
        }
    });
});

