import JustValidate from "just-validate";
if (document.querySelector("#lection-form")) {
    const validator = new JustValidate("#lection-form");

    validator
        .addRequiredGroup("#class-group")
        .addField("#lection-form__name", [
            {
                rule: "required",
            },
            {
                rule: "minLength",
                value: 2,
            },
        ])
        .addField("#lection-form__date", [
            {
                rule: "required",
            },
        ])
        .addField("#lection-form__count", [
            {
                rule: "required",
            },
        ])
        .addField("#lection-form__number", [
            {
                rule: "required",
            },
        ])
        .addField("#lection-form__phone", [
            {
                rule: "required",
            },
        ])

        .addField("#lection-form__email", [
            {
                rule: "required",
            },
            {
                rule: "email",
            },
        ])
        .addField("#lection-form__agree", [
            {
                rule: "required",
            },
        ]);

    validator.onSuccess((event) => {
        event.currentTarget.submit();
    });
}
