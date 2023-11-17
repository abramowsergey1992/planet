import SlimSelect from "slim-select";

document.querySelectorAll(".select").forEach((select) => {
    new SlimSelect({
        select: select,
        settings: {
            showSearch: false,
        },
        events: {
            afterChange: (newVal) => {
                console.log("ssss");
                select.closest("form")?.dispatchEvent(new Event("change"));
            },
        },
    });
});

