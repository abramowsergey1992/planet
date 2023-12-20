import Swiper from "swiper/bundle";
import "swiper/css/bundle";

document.querySelectorAll(".shema-page ").forEach((el) => {
    const swiper = new Swiper(el.querySelector(".shema__swiper"), {
        slidesPerView: 1,
        setWrapperSize: true,
        allowTouchMove: false,
        autoHeight: true,
        breakpoints: {
            800: {
                autoHeight: false,
            },
        },
    });

    el.querySelectorAll(".shema-navs button").forEach((filter) => {
        filter.addEventListener("click", (event) => {
            el.querySelectorAll(".shema-navs button").forEach((btn) => {
                btn.classList.remove("_active");
            });

            filter.classList.add("_active");
            swiper.slideTo(filter.dataset.slide);
        });
    });
});

document.querySelectorAll("[data-room]").forEach((legeng) => {
    legeng.addEventListener("mouseover", function () {
        document
            .querySelectorAll(`[data-room='${legeng.dataset.room}']`)
            .forEach((svg) => {
                svg.classList.add("_active");
            });
    });
    legeng.addEventListener("mouseout", function () {
        document
            .querySelectorAll(`[data-room='${legeng.dataset.room}']`)
            .forEach((svg) => {
                svg.classList.remove("_active");
            });
    });
});

