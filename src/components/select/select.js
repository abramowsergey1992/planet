import SlimSelect from "slim-select";

document.querySelectorAll(".select").forEach((select) => {
    new SlimSelect({
        select: select,
        settings: {
            showSearch: false,
            placeholderText: select.dataset.placeholder,
        },
        events: {
            afterChange: (newVal) => {
                select.closest("form")?.dispatchEvent(new Event("change"));
            },
        },
    });
});

