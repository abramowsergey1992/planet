import { GLOBALS } from "../../js/globals";

if (GLOBALS.mobile) {
    document.querySelectorAll('.js-droplist').forEach(container => {
        const trigger = container.querySelector('.js-droplist-trigger');

        trigger?.addEventListener('click', () => {
            container.classList.toggle('_is-active');
        });

        document.addEventListener('click', e => {
            if (e.target !== container && !container.contains(e.target)) {
                container.classList.remove('_is-active');
            }
        });
    });
}
