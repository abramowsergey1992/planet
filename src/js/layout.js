document.querySelectorAll(".btn-border").forEach((el) => {
    el.innerHTML = `<span class="btn-border__content">${el.innerHTML}</span>`;
});

document.querySelectorAll("blockquote").forEach((el) => {
    el.classList.add("blockquote");
    el.innerHTML = `<span class="blockquote__content">${el.innerHTML}</span>`;
});
document.querySelectorAll(".icon-time").forEach((el) => {
    el.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.85714V9L12.4286 12.4286M9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17Z" stroke="currentColor" stroke-width="1.4"/></svg>`;
});
document.querySelectorAll(".icon-marker").forEach((el) => {
    el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.1429C13.288 13.1429 14.3333 12.1189 14.3333 10.8571C14.3333 9.59542 13.288 8.57143 12 8.57143C10.712 8.57143 9.66663 9.59542 9.66663 10.8571C9.66663 12.1189 10.712 13.1429 12 13.1429Z" stroke="currentColor" stroke-width="1.4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 10.8571C19 16.5715 13.1666 20.0001 12 20.0001C10.8333 20.0001 4.99994 16.5715 4.99994 10.8571C4.99994 7.07084 8.13479 4 12 4C15.8652 4 19 7.07084 19 10.8571Z" stroke="currentColor" stroke-width="1.4"/>
</svg>
`;
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

