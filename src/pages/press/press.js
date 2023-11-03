let template = document.querySelector("#press-template .press-item");
let empty = document.querySelector("#press-template .press-empty");
let list = document.querySelector("#presslist");
let filter = document.querySelector("#pressfilter");
const url = filter.getAttribute("action");

filter.onchange = function (e) {
    fetch(
        url +
            "?" +
            new URLSearchParams({
                year: document.querySelector('input[name="years"]:checked')
                    .value,
                month: document.querySelector('input[name="month"]:checked')
                    .value,
            }),
        {
            method: filter.getAttribute("method"),
            headers: {
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        }
    )
        .then((response) => response.json())
        .then((data) => {
            list.innerHTML = "";
            if (data.items.length) {
                data.items.forEach((item) => {
                    let clone = template.cloneNode(true);
                    clone.querySelector(".press-item__date").innerText =
                        item.date;
                    clone.querySelector(".press-item__name").innerText =
                        item.name;
                    clone.querySelector(".press-item__type").innerText =
                        item.type;
                    clone.querySelector(
                        ".press-item__link"
                    ).innerHTML = `<color>${item.text}</color>`;
                    clone
                        .querySelector(".press-item__link")
                        .setAttribute("href", item.link);
                    list.appendChild(clone);
                });
            } else {
                list.appendChild(empty.cloneNode(true));
            }
        });
};

