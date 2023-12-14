function slide_validation(slide) {
    let error = false;
    if (slide.querySelector(".js-prioritets-number")) {
        slide.querySelectorAll("input").forEach((input) => {
            if (!input.checked) {
                error = true;
            }
        });
    } else {
        if (slide.querySelectorAll("input:checked").length == 0) {
            error = true;
        }
    }
    return error;
}
function write_prioritet(prioritets) {
    let inputs = prioritets.querySelectorAll("input");
    var inputsArray = Array.prototype.slice.call(inputs, 0);

    inputsArray.sort(function (a, b) {
        return a.getAttribute("prioritet") - b.getAttribute("prioritet");
    });
    let number = 1;
    inputsArray.forEach((input) => {
        if (input.checked) {
            input
                .closest(".quiz__answer,.quiz__photo-answer")
                .querySelector(".js-prioritets-number ").innerText = number;
            number++;
        }
    });
}

document.querySelectorAll(".js-prioritets").forEach((prioritets) => {
    let prioritet__number = 0;
    prioritets.querySelectorAll("input").forEach((input) => {
        input.setAttribute("prioritet", 0);
        input.addEventListener("change", function () {
            if (input.checked) {
                prioritet__number++;
                input.setAttribute("prioritet", prioritet__number);
            }
            write_prioritet(prioritets);
        });
    });
});
// import Swiper
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

document.querySelectorAll(".quiz__swiper").forEach((el) => {
    const swiper = new Swiper(el, {
        slidesPerView: 1,
        setWrapperSize: true,
        spaceBetween: 12,
        pagination: {
            el: ".quiz__swiper-pagi",
            type: "bullets",
        },
        preventClicks: false,
        allowTouchMove: false,
    });
    el.querySelector(".quiz-start").addEventListener("click", function () {
        swiper.slideNext();
    });
    el.querySelectorAll(".quiz__next").forEach((next) => {
        let slide = next.closest(".swiper-slide");
        next.addEventListener("click", function (e) {
            let error = slide_validation(slide);
            if (error) {
                e.preventDefault();
                slide.classList.add("_error-validation");
                setTimeout(() => {
                    slide.classList.remove("_error-validation");
                }, 1000);
            } else {
                swiper.slideNext();
            }
        });
    });
});

