if (document.querySelector(".shedule-popup")) {
    const popup = document.querySelector(".shedule-popup");
    const content = popup.querySelector(".shedule-popup__content");
    const url = popup.dataset.url;
    popup.querySelectorAll(".js-shedule-popup-close").forEach(() => {
        popup.classList.remove("_animate");
        setTimeout(function () {
            popup.classList.remove("_display");
        }, 300);
    });
    document.querySelectorAll("[data_ticket_system_id]").forEach((btn) => {
        btn.addEventListener("click", function () {
            content.innerHTML = `  <iframe 
                src="${url}${btn.getAttribute("data_ticket_system_id")}"
                frameborder="0"
            ></iframe>`;
            popup.classList.add("_display");
            setTimeout(function () {
                popup.classList.add("_animate");
            }, 50);
        });
    });
}

