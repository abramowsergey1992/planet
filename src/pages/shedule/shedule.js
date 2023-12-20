import { renderSvgIcons } from "../../js/layout";

function renderTemplate(item) {
    let template = document.querySelector('#sheduletemplate')?.innerHTML;

    if (!template) {
        return '';
    }

    // Image
    if (item.img) {
        template = template.replaceAll('{% img %}', `<img src="${item.img}" alt="" />`);
    }

    // Tags
    if (item.topTags) {
        let tags = '';

        item.topTags.forEach(tag => {
            tags += `<li class="${tag.class ? tag.class : ''}">${tag.text}</li>`;
        });

        template = template.replaceAll('{% tags %}', tags);
    }

    // Awards
    if (item.awards) {
        let awards = '';

        item.awards.forEach(award => {
            awards += `
                <li class="event-preview__award">
                    <span class="shedule-item__award-top">${award.top}</span>
                    <span class="shedule-item__award-name">${award.text}</span>
                    <span class="shedule-item__award-year">${award.year}</span>
                </li>`;
        });

        template = template.replaceAll('{% awards %}', awards);
    }

    // Title
    if (item.title) {
        template = template.replaceAll('{% title %}', item.title);
    }

    // URL
    if (item.link) {
        template = template.replaceAll('{% link %}', item.link);
    }

    // Info
    if (item.info) {
        let info = '';

        item.info.forEach(inf => {
            info += `<li><span class="icon-${inf.icon}"></span> ${inf.text}</li>`;
        });

        template = template.replaceAll('{% info %}', info);
    }

    // Description
    if (item.desc) {
        template = template.replaceAll('{% desc %}', item.desc);
    }

    // Slots
    if (item.slots) {
        let slots = '';

        item.slots.forEach(slot => {
            slots += `
                <li class="shedule-item__slot">
                    <button class="shedule-item__slot-buy" data_ticket_system_id="${slot.id}">
                        ${slot.time}
                    </button>
                    <p>${slot.price}</p>
                </li>`;
        });

        template = template.replaceAll('{% slots %}', slots);
    }

    return template;
}

if (document.querySelector(".shedule-popup")) {
    const popup = document.querySelector(".shedule-popup");

    popup.querySelectorAll(".js-shedule-popup-close").forEach(btn => {
        btn.addEventListener("click", () => {
            popup.classList.remove("_display");
        })
    });

    bindSlots();
}

function bindSlots() {
    const popup = document.querySelector(".shedule-popup");
    const content = popup.querySelector(".shedule-popup__content");
    const url = popup.dataset.url;
    
    document.querySelectorAll("[data_ticket_system_id]").forEach((btn) => {
        btn.addEventListener("click", function () {
            content.innerHTML = `<iframe 
                src="${url}${btn.getAttribute("data_ticket_system_id")}"
                frameborder="0"
            ></iframe>`;
            popup.classList.add("_display");
        });
    });
}

let filterPopup = document.querySelector(".filter-popup");
document
    .querySelector(".filter-menu-open")
    ?.addEventListener("click", function () {
        filterPopup.classList.add("_open");
    });
document
    .querySelector(".filter-popup__close")
    ?.addEventListener("click", function () {
        filterPopup.classList.remove("_open");
    });


let list = document.querySelector("#shedulelist");
let filter = document.querySelector("#shedulefilter");
const url = filter?.getAttribute("action");
const method = filter?.getAttribute("method");
document
    .querySelector(".filter-popup__clear")
    ?.addEventListener("click", function () {
        filter.querySelectorAll("input").forEach((item) => {
            item.checked = false;
        });
    });

function render() {
    fetch(url, {
        method: method,
        body: new FormData(filter),
        headers: {
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            list.innerHTML = "";
            let newHTML = "";

            if (data.items.length) {
                data.items.forEach((item) => {
                    newHTML += renderTemplate(item);
                });
            } else {
                newHTML = "<p>Ничего не нашлось</p>";
            }

            list.innerHTML = newHTML;
            renderSvgIcons(list);
            bindSlots();
            filterPopup.classList.remove("_open");
        });
}

if (filter) {
    filter.onchange = function () {
        if (window.innerWidth > 1024) {
            render();
        }
    };
    filter.addEventListener("submit", function (e) {
        e.preventDefault();
        render();
    });
}
