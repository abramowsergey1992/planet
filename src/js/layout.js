import IMask from "imask";

document.querySelectorAll("._mask-phone").forEach((el) => {
    IMask(el, {
        mask: "+{7} (000) 000-00-00",
    });
});
document.querySelectorAll(".btn-border").forEach((el) => {
    el.innerHTML = `<span class="btn-border__content">${el.innerHTML}</span>`;
});
if (window.scrollY) {
    document.body.classList.remove("_scroll-top");
} else {
    document.body.classList.add("_scroll-top");
}
document.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        document.body.classList.remove("_scroll-top");
    } else {
        document.body.classList.add("_scroll-top");
    }
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

export function renderSvgIcons(container) {
    container.querySelectorAll(".icon-time").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.85714V12L15.4286 15.4286M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" stroke="currentColor" stroke-width="1.4"/>
    </svg>
    `;
    });
    container.querySelectorAll(".icon-next").forEach((el) => {
        el.innerHTML = `<svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.9554 17L18 12M18 12L12.9554 6.99998M18 12H6"
                                stroke="currentColor"
                                stroke-width="1.4"
                            />
                        </svg>
    `;
    });
    container.querySelectorAll(".icon-marker").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.1429C13.288 13.1429 14.3333 12.1189 14.3333 10.8571C14.3333 9.59542 13.288 8.57143 12 8.57143C10.712 8.57143 9.66663 9.59542 9.66663 10.8571C9.66663 12.1189 10.712 13.1429 12 13.1429Z" stroke="currentColor" stroke-width="1.4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 10.8571C19 16.5715 13.1666 20.0001 12 20.0001C10.8333 20.0001 4.99994 16.5715 4.99994 10.8571C4.99994 7.07084 8.13479 4 12 4C15.8652 4 19 7.07084 19 10.8571Z" stroke="currentColor" stroke-width="1.4"/>
    </svg>
    `;
    });
    container.querySelectorAll(".icon-heart").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.9645 12.0355L12 18L6.03553 12.0355C5.37249 11.3725 5 10.4732 5 9.53553C5 7.58291 6.58291 6 8.53553 6C9.47322 6 10.3725 6.37249 11.0355 7.03553L12 8L12.9645 7.03553C13.6275 6.37249 14.5268 6 15.4645 6C17.4171 6 19 7.58291 19 9.53553C19 10.4732 18.6275 11.3725 17.9645 12.0355Z" stroke="currentColor" stroke-width="1.4"/>
    </svg>`;
    });
    container.querySelectorAll(".icon-person").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7.99804C9 9.65396 10.343 10.9961 12 10.9961C13.657 10.9961 15 9.65396 15 7.99804C15 6.34212 13.657 5 12 5C10.343 5 9 6.34212 9 7.99804Z" stroke="currentColor" stroke-width="1.4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 18.9909H17C17 18.2808 17 17.6053 17 16.9936C17 15.3368 15.6569 13.9941 14 13.9941H10C8.34315 13.9941 7 15.3368 7 16.9936C7 17.6053 7 18.2808 7 18.9909Z" stroke="currentColor" stroke-width="1.4"/></svg>`;
    });
    container.querySelectorAll(".icon-persons").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 19H3V17.5C3 16.1193 4.11929 15 5.5 15M18.5 19H21V17.5C21 16.1193 19.8807 15 18.5 15M9 7.99804C9 9.65396 10.343 10.9961 12 10.9961C13.657 10.9961 15 9.65396 15 7.99804C15 6.34212 13.657 5 12 5C10.343 5 9 6.34212 9 7.99804ZM7 18.9909H17C17 18.2808 17 17.6053 17 16.9936C17 15.3368 15.6569 13.9941 14 13.9941H10C8.34315 13.9941 7 15.3368 7 16.9936C7 17.6053 7 18.2808 7 18.9909ZM6 13C7.10457 13 8 12.1046 8 11C8 9.89543 7.10457 9 6 9C4.89543 9 4 9.89543 4 11C4 12.1046 4.89543 13 6 13ZM18 13C16.8954 13 16 12.1046 16 11C16 9.89543 16.8954 9 18 9C19.1046 9 20 9.89543 20 11C20 12.1046 19.1046 13 18 13Z" stroke="currentColor" stroke-width="1.4"/>
    </svg>
    `;
    });
    container.querySelectorAll(".icon-child").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5655 13.5606L12.1314 12.9951L11.0004 11.8634L10.4345 12.4289L11.5655 13.5606ZM13.2 14.9935V15.7935H14.8V14.9935H13.2ZM14.8 13.9941V13.1941H13.2V13.9941H14.8ZM13.2 5.99939V6.79939H14.8V5.99939H13.2ZM14.8 5V4.2H13.2V5H14.8ZM9 9.19683H8.2V10.7968H9V9.19683ZM10 10.7968H10.8V9.19683H10V10.7968ZM18 9.19683H17.2V10.7968H18V9.19683ZM19 10.7968H19.8V9.19683H19V10.7968ZM16.4345 6.43292L15.8686 6.99843L16.9997 8.13015L17.5655 7.56464L16.4345 6.43292ZM18.5655 6.56525L19.1314 5.99973L18.0003 4.86802L17.4345 5.43353L18.5655 6.56525ZM10.5655 5.43353L9.99965 4.86802L8.86863 5.99973L9.43449 6.56525L10.5655 5.43353ZM10.4345 7.56464L11.0003 8.13015L12.1314 6.99843L11.5655 6.43292L10.4345 7.56464ZM17.5655 12.4289L16.9997 11.8634L15.8686 12.9951L16.4345 13.5606L17.5655 12.4289ZM17.4345 14.56L18.0003 15.1255L19.1314 13.9938L18.5655 13.4283L17.4345 14.56ZM5.5655 19.5567L11.5655 13.5606L10.4345 12.4289L4.4345 18.425L5.5655 19.5567ZM14.8 14.9935V13.9941H13.2V14.9935H14.8ZM14.8 5.99939V5H13.2V5.99939H14.8ZM9 10.7968H10V9.19683H9V10.7968ZM18 10.7968H19V9.19683H18V10.7968ZM17.5655 7.56464L18.5655 6.56525L17.4345 5.43353L16.4345 6.43292L17.5655 7.56464ZM9.43449 6.56525L10.4345 7.56464L11.5655 6.43292L10.5655 5.43353L9.43449 6.56525ZM16.4345 13.5606L17.4345 14.56L18.5655 13.4283L17.5655 12.4289L16.4345 13.5606Z" fill="currentColor"/>
    </svg>
    
    `;
    });
    container.querySelectorAll(".icon-web").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 10V9.2C15.4418 9.2 15.8 9.55817 15.8 10H15ZM15 11L14.4343 11.5657L14.2 11.3314V11H15ZM16.7071 11.2929L17.2728 11.8586L17.2728 11.8586L16.7071 11.2929ZM13 17.5H12.2V17.1686L12.4343 16.9343L13 17.5ZM14 16.5H14.8V16.8314L14.5657 17.0657L14 16.5ZM14 15H13.2V14.6686L13.4343 14.4343L14 15ZM15 14H15.8V14.3314L15.5657 14.5657L15 14ZM15 13V12.2C15.4418 12.2 15.8 12.5582 15.8 13H15ZM10.8 5V7H9.2V5H10.8ZM11 7.2H12V8.8H11V7.2ZM14 9.2H15V10.8H14V9.2ZM15.8 10V11H14.2V10H15.8ZM15.5657 10.4343L15.8586 10.7272L14.7272 11.8586L14.4343 11.5657L15.5657 10.4343ZM16.1414 10.7272L17.9343 8.93431L19.0657 10.0657L17.2728 11.8586L16.1414 10.7272ZM13.8 9C13.8 9.11046 13.8895 9.2 14 9.2V10.8C13.0059 10.8 12.2 9.99411 12.2 9H13.8ZM12 7.2C12.9941 7.2 13.8 8.00589 13.8 9H12.2C12.2 8.88954 12.1105 8.8 12 8.8V7.2ZM15.8586 10.7272C15.9367 10.8053 16.0633 10.8053 16.1414 10.7272L17.2728 11.8586C16.5698 12.5615 15.4302 12.5615 14.7272 11.8586L15.8586 10.7272ZM10.8 7C10.8 7.11046 10.8895 7.2 11 7.2V8.8C10.0059 8.8 9.2 7.99411 9.2 7H10.8ZM12.2 19V17.5H13.8V19H12.2ZM12.4343 16.9343L13.4343 15.9343L14.5657 17.0657L13.5657 18.0657L12.4343 16.9343ZM13.2 16.5V15H14.8V16.5H13.2ZM13.4343 14.4343L14.4343 13.4343L15.5657 14.5657L14.5657 15.5657L13.4343 14.4343ZM14.2 14V13H15.8V14H14.2ZM15 13.8H11V12.2H15V13.8ZM10.8 14V14.6667H9.2V14H10.8ZM8.66667 16.8H6V15.2H8.66667V16.8ZM9.8 15.6667C9.8 16.2926 9.29259 16.8 8.66667 16.8V15.2C8.40894 15.2 8.2 15.4089 8.2 15.6667H9.8ZM9.66667 15.8C9.74031 15.8 9.8 15.7403 9.8 15.6667H8.2C8.2 14.8567 8.85665 14.2 9.66667 14.2V15.8ZM10.8 14.6667C10.8 15.2926 10.2926 15.8 9.66667 15.8V14.2C9.40894 14.2 9.2 14.4089 9.2 14.6667H10.8ZM11 13.8C10.8895 13.8 10.8 13.8895 10.8 14H9.2C9.2 13.0059 10.0059 12.2 11 12.2V13.8ZM12 18.2C15.4242 18.2 18.2 15.4242 18.2 12H19.8C19.8 16.3078 16.3078 19.8 12 19.8V18.2ZM5.8 12C5.8 15.4242 8.57583 18.2 12 18.2V19.8C7.69218 19.8 4.2 16.3078 4.2 12H5.8ZM12 5.8C8.57583 5.8 5.8 8.57583 5.8 12H4.2C4.2 7.69218 7.69218 4.2 12 4.2V5.8ZM12 4.2C16.3078 4.2 19.8 7.69218 19.8 12H18.2C18.2 8.57583 15.4242 5.8 12 5.8V4.2Z" fill="currentColor"/>
    
    </svg>
    
    `;
    });
    container.querySelectorAll(".icon-date").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4V9.17241M16 4V9.17241M7.5 11.7586H10.5M16.5 11.7586H13.5M7.5 14.8621H10.5M13.5 14.8621H16.5M6 6.58621H18C18.5523 6.58621 19 7.04936 19 7.62069V17.9655C19 18.5368 18.5523 19 18 19H6C5.44772 19 5 18.5368 5 17.9655V7.62069C5 7.04936 5.44772 6.58621 6 6.58621Z" stroke="currentColor" stroke-width="1.4"/>
    </svg>
    
    
    `;
    });
    container.querySelectorAll(".icon-load").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.2 5V4.2H12.8V5H11.2ZM12.8 8.76923V9.56923H11.2V8.76923H12.8ZM11.2 15.2308V14.4308H12.8V15.2308H11.2ZM12.8 19V19.8H11.2V19H12.8ZM15.2308 12.7951H14.4308V11.1951H15.2308V12.7951ZM19 11.1951H19.8V12.7951H19V11.1951ZM5.00103 12.8L4.20103 12.801L4.19897 11.201L4.99897 11.2L5.00103 12.8ZM8.7682 11.1951L9.5682 11.1941L9.57026 12.7941L8.77026 12.7951L8.7682 11.1951ZM12.8 5V8.76923H11.2V5H12.8ZM12.8 15.2308V19H11.2V15.2308H12.8ZM15.2308 11.1951H19V12.7951H15.2308V11.1951ZM4.99897 11.2L8.7682 11.1951L8.77026 12.7951L5.00103 12.8L4.99897 11.2ZM17.9503 7.18107L14.7195 10.4118L13.5882 9.28047L16.8189 6.0497L17.9503 7.18107ZM7.18107 6.0497L10.4118 9.28047L9.28047 10.4118L6.0497 7.18107L7.18107 6.0497ZM16.8189 17.9503L13.5882 14.7195L14.7195 13.5882L17.9503 16.8189L16.8189 17.9503ZM10.4118 14.7195L7.18107 17.9503L6.0497 16.8189L9.28047 13.5882L10.4118 14.7195Z" fill="currentColor"/>
    </svg>
    `;
    });
    container.querySelectorAll(".icon-category").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 8H19.5M11.5 16H19.5M6 6H8C8.55228 6 9 6.44772 9 7V9C9 9.55228 8.55228 10 8 10H6C5.44772 10 5 9.55228 5 9V7C5 6.44772 5.44772 6 6 6ZM6 14H8C8.55228 14 9 14.4477 9 15V17C9 17.5523 8.55228 18 8 18H6C5.44772 18 5 17.5523 5 17V15C5 14.4477 5.44772 14 6 14Z" stroke="currentColor" stroke-width="1.4"/>
    </svg>
    `;
    });
    container.querySelectorAll(".icon-quest").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15V12H13C14.6569 12 16 10.6569 16 9V8.8C16 7.2536 14.7464 6 13.2 6H12C10.3431 6 9 7.34315 9 9M11 18H13" stroke="currentColor" stroke-width="1.4"/>
    </svg>
    `;
    });
    container.querySelectorAll(".icon-headphones").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 14H17C16.4477 14 16 14.4477 16 15V18C16 18.5523 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V15C19 14.4477 18.5523 14 18 14ZM18 14V11C18 7.68629 15.3137 5 12 5C8.68629 5 6 7.68629 6 11V14M6 14H7C7.55228 14 8 14.4477 8 15V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V15C5 14.4477 5.44772 14 6 14Z" stroke="currentColor" stroke-width="1.6"/></svg> `;
    });
    container.querySelectorAll(".icon-language").forEach((el) => {
        el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.625 5V6.75" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12.875 6.75C12.9319 8.02313 13.1987 10.3156 14.5025 12.805C15.6706 15.0362 17.1712 16.4669 18.125 17.25" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/> <path d="M5 19L6.75 11.125H9.375L11.125 19" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.25 11.125C17.11 11.6631 16.8562 12.3894 16.3619 13.1463C15.4912 14.4806 14.3625 15.1806 13.75 15.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/> <path d="M10.25 15.5H5.875" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19 6.75H10.25" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/> </svg>`;
    });
}

renderSvgIcons(document);
