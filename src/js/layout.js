document.querySelectorAll(".btn-border").forEach((el) => {
    el.innerHTML = `<span class="btn-border__content">${el.innerHTML}</span>`;
});

document.querySelectorAll("blockquote").forEach((el) => {
    el.classList.add("blockquote");
    el.innerHTML = `<span class="blockquote__content">${el.innerHTML}</span>`;
});

