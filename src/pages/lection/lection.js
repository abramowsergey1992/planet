// import Swiper
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

document.querySelectorAll(".lections-prices").forEach((el) => {
    const swiper = new Swiper(el.querySelector(".lections-prices__swiper"), {
        slidesPerView: 1,
        setWrapperSize: true,
        allowTouchMove: false,
        autoHeight: true,
    });
    el.querySelectorAll(".lections-prices__filter").forEach((filter) => {
        filter.addEventListener("click", (event) => {
            el.querySelectorAll(".lections-prices__filter").forEach((btn) => {
                btn.classList.remove("_active");
            });

            filter.classList.add("_active");
            swiper.slideTo(filter.dataset.slide);
        });
    });
});

