// import Swiper
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

document.querySelectorAll(".guides-swiper").forEach((el) => {
    const swiper = new Swiper(el, {
        slidesPerView: "auto",
        setWrapperSize: true,
        spaceBetween: 12,
        // pagination: {
        //     el: el.querySelector(".event-cards__pagi"),
        //     type: "bullets",
        // },
        breakpoints: {
            1400: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
        },
    });
});
document.querySelectorAll(".sidebar-cards").forEach((el) => {
    const swiper = new Swiper(el, {
        slidesPerView: "auto",
        setWrapperSize: true,
        spaceBetween: 12,
        // pagination: {
        //     el: el.querySelector(".event-cards__pagi"),
        //     type: "bullets",
        // },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
        },
    });
});
let form = document.querySelector("#excursion-prices-form");
if (form) {
    let queryprice = JSON.parse(form.dataset.queryprice);
    form.onchange = function (e) {
        fetch(queryprice.url, {
            method: queryprice.method,
            body: new FormData(form),
            headers: {
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                document.querySelector("#excursion-info-quantity").innerHTML =
                    data.quantity;
                document.querySelector("#excursion-info-price").innerHTML =
                    Number(data.price).toLocaleString().replace(/,/g, " ");
                document.querySelector("#excursion-info-desc").innerHTML =
                    data.desc;
            });
    };
}

