document.querySelectorAll(".btn-border").forEach((el) => {
    el.innerHTML = `<span class="btn-border__content">${el.innerHTML}</span>`;
});

document.querySelectorAll("blockquote").forEach((el) => {
    el.classList.add("blockquote");
    el.innerHTML = `<span class="blockquote__content">${el.innerHTML}</span>`;
});
document.querySelectorAll(".overfolow-x").forEach((el) => {
    el.innerHTML = `<div class="overfolow-x__scroll"><div><div class="overfolow-x__size">${el.innerHTML}</div></div></div>
    <div class="overfolow-x__prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0446 17L6 12M6 12L11.0446 6.99998M6 12H18" stroke="currentColor" stroke-width="1.4"/></svg></div>
    <div class="overfolow-x__next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9554 17L18 12M18 12L12.9554 6.99998M18 12H6" stroke="currentColor" stroke-width="1.4"/></svg></div>`;

    let size = el.querySelector(".overfolow-x__size");
    let scroll = el.querySelector(".overfolow-x__scroll");
    let prev = el.querySelector(".overfolow-x__prev");
    let next = el.querySelector(".overfolow-x__next");
    next.addEventListener("click", function () {
        scroll.scroll({
            left: scroll.scrollLeft + 150,
            top: 0,
            behavior: "smooth",
        });
    });
    prev.addEventListener("click", function () {
        scroll.scroll({
            left: scroll.scrollLeft - 150,
            top: 0,
            behavior: "smooth",
        });
    });
    function rescroll() {
        if (scroll.scrollLeft >= 50) {
            prev.classList.add("_active");
        } else {
            prev.classList.remove("_active");
        }

        if (scroll.scrollLeft + size.offsetWidth <= scroll.scrollWidth - 50) {
            next.classList.add("_active");
        } else {
            next.classList.remove("_active");
        }
    }
    scroll.addEventListener("scroll", function () {
        rescroll();
    });
    rescroll();
});

