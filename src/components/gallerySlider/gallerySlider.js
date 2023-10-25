import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";
import { gsap } from "gsap";

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

let gallerySlider = document.querySelectorAll(".gallery-slider__swiper");
[].forEach.call(gallerySlider, function (el) {
    const swiper = new Swiper(el, {
        centeredSlides: true,
        setWrapperSize: true,
        spaceBetween: 12,
        loopedSlides: 6,
        slidesPerView: 1,
        loop: true,
        speed: 2000,
        breakpoints: {
            700: { spaceBetween: 16 },
            992: { slidesPerView: 1.4, centeredSlides: true },
        },
    });

    let speed = 2000;
    let cursor = el.querySelector(".gallery-slider__cursor");
    let play = false;
    let direction = "";
    let t = 0;
    let interval = setInterval(function () {
        if (play) {
            if (t == 0) {
                if (direction == "LEFT") {
                    swiper.slidePrev();
                }
                if (direction == "RIGHT") {
                    swiper.slideNext();
                }
            }
            t += 100;
            if (t == speed) {
                t = 0;
            }
        }
    }, 100);
    el.onmouseenter = function () {
        play = true;
    };
    el.onmouseleave = function () {
        play = false;
    };

    el.addEventListener("mousemove", (e) => {
        console.log(el.offsetTop, e.pageY);
        gsap.to(cursor, 0.23, {
            left: e.pageX,
            top: e.pageY - offset(el).top,
        });

        direction = "";
        if (play && e.clientX < window.innerWidth / 3) {
            play = true;
            direction = "LEFT";
            t = 0;
            console.log("autoplay left");
        }

        if (play && e.clientX > window.innerWidth - window.innerWidth / 3) {
            t = 0;
            play = true;
            direction = "RIGHT";
            console.log("autoplay right");
        }
    });
});

