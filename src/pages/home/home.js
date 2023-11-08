import { GLOBALS } from '../../js/globals';

// Video
document.querySelectorAll('.js-hp-video').forEach(el => {
    const container = el;

    // Autoplay for desktop devices only
    if (!GLOBALS.mobile) {
        container.querySelector('video')?.play();
    }
});
