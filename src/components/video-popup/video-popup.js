let popup;

class VideoPopup {
    constructor(el) {
        this.container = el;
        this.inner = this.container.querySelector('.js-video-popup-inner');
        this.closeBtn = this.container.querySelector('.js-video-popup-close');
        this.handleCloseBtn();
        this.handleCloseKeys();
        this.isOpen = false;
    }

    appendVideo(src) {
        this.inner.innerHTML = `
            <video src="${src}"
                loop
                controls
                autoplay
            ></video>
        `;
    }

    open(src) {
        this.appendVideo(src);
        this.container.classList.add('_is-visible');
        this.isOpen = true;
    }

    close() {
        this.inner.innerHTML = '';
        this.container.classList.remove('_is-visible');
        this.isOpen = false;
    }

    handleCloseBtn() {
        this.closeBtn.addEventListener('click', () => {
            this.close();
        });
    }

    handleCloseKeys() {
        document.addEventListener('keydown', e => {
            if (e.key == 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }
}

if (document.querySelector('.js-video-popup')) {
    popup = new VideoPopup(document.querySelector('.js-video-popup'));

    document.querySelectorAll('.js-open-video').forEach(btn => {
        btn.addEventListener('click', () => {
            popup.open(btn.dataset.src);
        });
    });
}
