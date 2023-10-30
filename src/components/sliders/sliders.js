import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";
document.querySelectorAll(".slider-3").forEach((el) => {
    const swiper = new Swiper(el, {
        slidesPerView: 1,
        setWrapperSize: true,
        spaceBetween: 12,
        pagination: {
            el: el.querySelector(".slider-3"),
            type: "bullets",
        },
        breakpoints: {
            600: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3 },
        },
    });
});

