// Scroll trigger animations
import ScrollMagic from 'scrollmagic';

const smController = new ScrollMagic.Controller();

class triggerElement {
    constructor(el) {
        this.container = el;
        this.scene = null;

        this.handleScroll();
        this.handleUpdate();
    }

    handleScroll() {
        this.scene = new ScrollMagic.Scene({
            triggerElement: this.container,
            triggerHook: 0.75,
            offset: 0,
            duration: 0,
            reverse: false
        })
            .addTo(smController)
            .on('enter', () => {
                this.container.classList.add('_is-animated');
            })
            .on('leave', () => {
                this.container.classList.remove('_is-animated');
            });
    }

    handleUpdate() {
        window.addEventListener('resize', () => {
            this.update();
        });
    }

    update() {
        this.scene.refresh();
    }
}

document.querySelectorAll('.js-trigger-animate').forEach(el => {
    new triggerElement(el);
});
