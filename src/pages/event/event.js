// import Swiper
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

document.querySelectorAll(".event-cards").forEach((el) => {
    const swiper = new Swiper(el, {
        slidesPerView: "auto",
        setWrapperSize: true,
        spaceBetween: 12,
        pagination: {
            el: el.querySelector(".event-cards__pagi"),
            type: "bullets",
        },
        breakpoints: {
            900: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
        },
        loop: true,
    });
});
document.querySelectorAll(".awards-slider").forEach((el) => {
    const swiper = new Swiper(el, {
        slidesPerView: "auto",
        setWrapperSize: true,
        spaceBetween: 12,
        pagination: {
            el: el.querySelector(".awards-slider__pagi"),
            type: "bullets",
        },
        breakpoints: {
            900: { spaceBetween: 16, slidesPerView: 4 },
        },
    });
});

document.querySelectorAll(".event-programs").forEach((el) => {
    const swiper = new Swiper(el, {
        slidesPerView: "auto",
        setWrapperSize: true,
        spaceBetween: 12,
        pagination: {
            el: el.querySelector(".event-programs__pagi"),
            type: "bullets",
        },
        breakpoints: {
            700: { spaceBetween: 16, slidesPerView: 2 },
        },
    });
});

