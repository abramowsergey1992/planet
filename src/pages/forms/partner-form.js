import JustValidate from "just-validate";
if (document.querySelector("#partner-form")) {
    const validator = new JustValidate("#partner-form");

    validator
        .addField("#partner-form__name", [
            {
                rule: "required",
            },
            {
                rule: "minLength",
                value: 2,
            },
        ])
        .addField("#partner-form__number", [
            {
                rule: "required",
            },
        ])
        .addField("#partner-form__phone", [
            {
                rule: "required",
            },
        ])

        .addField("#partner-form__email", [
            {
                rule: "required",
            },
            {
                rule: "email",
            },
        ])
        .addField("#partner-form__agree", [
            {
                rule: "required",
            },
        ]);
}

