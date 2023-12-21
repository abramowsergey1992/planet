import ScrollMagic from "scrollmagic";

const smController = new ScrollMagic.Controller();

const blocks = document.querySelectorAll(".anchor-block");
blocks.forEach((block) => {
    console.log();
    let top = block.getBoundingClientRect().top;
    var s = new ScrollMagic.Scene({
        offset:
            top -
            document.querySelector(".header").offsetHeight -
            (window.innerWidth >= 1300 ? 30 : -5),
    })
        .setPin(block.querySelector(".anchor-block__list"))
        // .addIndicators({ name: "1 (duration: 300)" })
        .addTo(smController);
});
const anchorList = document.querySelector(".anchor-block__list");
const anchors = document.querySelectorAll('.anchor-block a[href*="#"]');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                anchors.forEach((link) => {
                    let id = link.getAttribute("href").replace("#", "");
                    if (id === entry.target.id) {
                        link.classList.add("_active");
                    } else {
                        link.classList.remove("_active");
                    }
                });
            }
            anchorList.scrollTo({
                left: document.querySelector(".anchor-block ._active")
                    .offsetLeft,

                behavior: "smooth",
            });
        });
    },
    {
        threshold: 0.5,
    }
);

for (let anchor of anchors) {
    if (document.querySelector(anchor.getAttribute("href"))) {
        observer.observe(document.querySelector(anchor.getAttribute("href")));
    }
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const block = document.querySelector(anchor.getAttribute("href"));

        window.scrollTo({
            top: block.getBoundingClientRect().top - 170,
            left: 0,
            behavior: "smooth",
        });
    });
}

document.querySelectorAll(".glosarii-item").forEach((glosarii) => {
    observer.observe(glosarii);
});

