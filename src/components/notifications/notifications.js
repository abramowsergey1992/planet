class Notification {
    constructor(el) {
        this.container = el;
        this.id = this.container.dataset.id.toString();
        this.checkInStorage();
        this.bindClose();
        // localStorage.clear(); // debug
    }

    getFromStorage() {
        let array = [];

        if (window.localStorage.closedNotifications) {
            try {
                array = JSON.parse(window.localStorage.closedNotifications);
            } catch (error) {
                console.log(error);
            }
        }

        return array;
    }

    checkInStorage() {
        let array = this.getFromStorage();

        if (array.includes(this.id)) {
            this.hide();
        }
    }

    addToStorage() {
        let array = this.getFromStorage();
        array.push(this.id);
        window.localStorage.setItem('closedNotifications', JSON.stringify(array));
    }

    hide() {
        this.container.classList.add('_is-hidden');
    }

    bindClose() {
        this.container
            .querySelector('.js-notification-btn-close')
            ?.addEventListener('click', () => {
                this.hide();
                this.addToStorage();
            });
    }
}

document.querySelectorAll('.js-notification[data-id]').forEach(el => {
    new Notification(el);
});
