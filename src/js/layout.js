[].forEach.call(document.querySelectorAll(".btn-border"), function (el) {
    el.innerHTML = `<span class="btn-border__content">${el.innerHTML}</span>`;
});

