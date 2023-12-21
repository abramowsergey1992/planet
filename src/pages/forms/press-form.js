import JustValidate from "just-validate";
if (document.querySelector("#press-form")) {
    const validator = new JustValidate("#press-form");

    validator
        .addField("#press-form__name", [
            {
                rule: "required",
            },
            {
                rule: "minLength",
                value: 2,
            },
        ])
        .addField("#press-form__number", [
            {
                rule: "required",
            },
        ])
        .addField("#press-form__phone", [
            {
                rule: "required",
            },
        ])

        .addField("#press-form__email", [
            {
                rule: "required",
            },
            {
                rule: "email",
            },
        ])
        .addField("#press-form__agree", [
            {
                rule: "required",
            },
        ]);

    validator.onSuccess((event) => {
        event.currentTarget.submit();
    });
}
