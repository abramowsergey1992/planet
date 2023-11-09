import { GLOBALS } from '../../js/globals';

// Video
document.querySelectorAll('.js-hp-video').forEach(el => {
    const container = el;

    // Autoplay for desktop devices only
    if (!GLOBALS.mobile) {
        container.querySelector('video')?.play();
    }
});


// Hovers with images
if (!GLOBALS.mobile) {
    document.querySelectorAll('.js-hp-hover-btn').forEach(btn => {
        const id = btn.dataset.id;
        const img = btn.closest('.js-hp-hover')?.querySelector(`.js-hp-hover-bg[data-id="${id}"]`);
        
        btn.addEventListener('mouseenter', () => {
            img?.classList.add('_is-visible');
        });

        btn.addEventListener('mouseleave', () => {
            img?.classList.remove('_is-visible');
        });
    });
}
