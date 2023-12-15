import Swiper from "swiper/bundle";

document.querySelectorAll('.js-podcasts-recent').forEach((el) => {
    new Swiper(el, {
        slidesPerView: 1.33,
        setWrapperSize: true,
        spaceBetween: 16,
        breakpoints: {
            600: { slidesPerView: 1.5 },
            1000: { slidesPerView: 2 },
            1300: { slidesPerView: 3 },
        },
    });
});
