class Form {
    constructor(el) {
        this.form = el;
        this.submitBtn = this.form.querySelector('.js-form-submit');

        this.bindSubmit();
        this.bindClose();
    }

    bindSubmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendForm();
        });
    }


    async sendForm() {
        this.submitBtn.disabled = true;
        let json;

        const response = await fetch(
            this.form.getAttribute('action'),
            {
                method: this.form.getAttribute('method') || 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
                },
                body: new FormData(this.form)
            }
        );

        this.submitBtn.disabled = false;

        // Server error
        if (!response.ok) {
            this.form.classList.add('_is-sent');
            this.renderMessage('Произошла ошибка, попробуйте позже');
            
            console.log('Fetch failed');
            return;
        }

        // JSON parsing
        try {
            json = await response.json();
        } catch (error) {
            this.form.classList.add('_is-sent');
            this.renderMessage('Произошла ошибка, попробуйте позже');

            console.log('JSON parsing error');
            return;
        }

        if (json) {
            this.form.classList.add('_is-sent');
            this.renderMessage(json.message || 'Форма отправлена');

            if (json.success) {
                this.resetForm();
            }
        }
    }

    resetForm() {
        this.form.reset();
    }

    renderMessage(text) {
        this.form.querySelector('.js-form-msg-text').innerHTML = text;
    }

    bindClose() {
        this.form.querySelector('.js-form-ok')?.addEventListener('click', () => {
            this.form.classList.remove('_is-sent');
        });
    }
}


document.querySelectorAll('.js-form').forEach(el => new Form(el));
