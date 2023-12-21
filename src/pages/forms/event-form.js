import JustValidate from "just-validate";
if (document.querySelector("#event-form")) {
    const validator = new JustValidate("#event-form");

    validator
        .addField("#event-form__name", [
            {
                rule: "required",
            },
            {
                rule: "minLength",
                value: 2,
            },
        ])
        .addField("#event-form__date", [
            {
                rule: "required",
            },
        ])
        .addField("#event-form__phone", [
            {
                rule: "required",
            },
        ])

        .addField("#event-form__email", [
            {
                rule: "required",
            },
            {
                rule: "email",
            },
        ])
        .addField("#event-form__agree", [
            {
                rule: "required",
            },
        ]);

    validator.onSuccess((event) => {
        event.currentTarget.submit();
    });
}
