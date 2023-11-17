import { slideDown, slideUp } from "../../js/globals.js";

document.querySelectorAll(".filter-popup__block").forEach((el) => {
    if (el.querySelector(".filter-popup__block-title")) {
        el.querySelector(".filter-popup__block-title").addEventListener(
            "click",
            function () {
                if (el.classList.contains("_open")) {
                    el.classList.remove("_open");
                    slideUp(el.querySelector(".filter-popup__block-body"), 500);
                } else {
                    el.classList.add("_open");
                    slideDown(
                        el.querySelector(".filter-popup__block-body"),
                        500
                    );
                }
            }
        );
    }
});
let filterPopup = document.querySelector(".filter-popup");
document
    .querySelector(".filter-menu-open")?.addEventListener("click", function () {
        filterPopup.classList.add("_open");
    });
document
    .querySelector(".filter-popup__close")?.addEventListener("click", function () {
        filterPopup.classList.remove("_open");
    });

let template = document.querySelector("#afisha-template .event-preview");
let empty = document.querySelector("#afisha-template .afisha__grid");
let list = document.querySelector("#afishalist");
let filter = document.querySelector("#afishafilter");
const url = filter?.getAttribute("action");
const method = filter?.getAttribute("method");
document
    .querySelector(".filter-popup__clear")?.addEventListener("click", function () {
        filter.querySelectorAll("input").forEach((item) => {
            item.checked = false;
        });
    });
function render() {
    fetch(url, {
        method: method,
        body: new FormData(filter),
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            list.innerHTML = "";
            console.log(data);
            if (data.items.length) {
                data.items.forEach((item) => {
                    let clone = template.cloneNode(true);
                    let topTags = clone.querySelector(
                        ".event-preview__top-head .event-preview__tags"
                    );
                    let bottomTags = clone.querySelector(
                        ".event-preview__top-bottom .event-preview__tags"
                    );
                    let awards = clone.querySelector(".event-preview__awards");
                    let info = clone.querySelector(".event-preview__info");
                    let bottom = clone.querySelector(".event-preview__bottom");

                    bottom.innerHTML = "";
                    if (item.buyLink) {
                        bottom.insertAdjacentHTML(
                            "beforeend",
                            `<a href="${item.buyLink}" class="btn-border">
                                    <span class="btn-border__content">${item.buyText}</span>
                                </a>
                                <a href="${item.link}" class="btn-link">Подробнее</a>`
                        );
                    } else {
                        bottom.insertAdjacentHTML(
                            "beforeend",
                            `<a href="${item.link}" class="btn-border">
                                    <span class="btn-border__content">Подробнее</span>
                                </a>`
                        );
                    }
                    topTags.innerHTML = "";
                    bottomTags.innerHTML = "";
                    clone
                        .querySelector(".event-preview__hover-link")
                        .setAttribute("href", item.link);
                    clone.querySelector(
                        ".event-preview__hover-link span"
                    ).innerText = item.title;
                    clone.querySelector(".event-preview__title").innerText =
                        item.title;
                    clone
                        .querySelector(".event-preview__bottom-wrap")
                        .insertAdjacentHTML("beforebegin", item.desc);
                    clone
                        .querySelector(".event-preview__img img")
                        .setAttribute("src", item.img);

                    if (item.topTags) {
                        item.topTags.forEach((tag) => {
                            topTags.insertAdjacentHTML(
                                "beforeend",
                                `<li><span>${tag}</span></li>`
                            );
                        });
                    }
                    if (item.bottomTags) {
                        item.bottomTags.forEach((tag) => {
                            bottomTags.insertAdjacentHTML(
                                "beforeend",
                                `<li class="${tag.class}">${
                                    tag.icon
                                        ? '<span class="' +
                                          tag.icon +
                                          '"></span'
                                        : ""
                                }<span>${tag.text}</span></li>`
                            );
                        });
                    }
                    if (item.awards) {
                        awards.innerHTML = "";
                        item.awards.forEach((award) => {
                            awards.insertAdjacentHTML(
                                "beforeend",
                                `<li class="event-preview__award">
                    <span class="event-preview__award-top">${award.top}</span>
                    <span class="event-preview__award-name">${award.text}</span>
                    <span class="event-preview__award-year">${award.year}</span> </li>`
                            );
                        });
                    } else {
                        awards.remove();
                    }
                    if (item.info) {
                        info.innerHTML = "";
                        item.info.forEach((el) => {
                            awards.insertAdjacentHTML(
                                "beforeend",
                                `<li class="${el.class}">${
                                    el.icon
                                        ? '<span class="' + el.icon + '"></span'
                                        : ""
                                }<span>${el.text}</span></li>`
                            );
                        });
                    } else {
                        info.remove();
                    }

                    list.appendChild(clone);
                });
            } else {
                list.appendChild(empty.cloneNode(true));
            }
            filterPopup.classList.remove("_open");
        });
}
if (filter) {
    filter.onchange = function (e) {
        if (window.innerWidth > 1024) {
            render();
        }
    };
    filter.addEventListener("submit", function (e) {
        e.preventDefault();
        render();
    });
}
