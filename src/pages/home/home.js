import { GLOBALS } from '../../js/globals';
import gsap from 'gsap';

// Video
if (!GLOBALS.mobile) {
    // Autoplay for desktop devices only
    document.querySelectorAll('.js-hp-video video').forEach(video => {
        video.play();
    });
}


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

// Space objects animation on scrolling
document.querySelectorAll('.js-hp-promo').forEach(el => {
    const container = el;
    const limitScroll = 1000;
    const titles = container.querySelector('.js-hp-promo-titles');
    const centralObject = container.querySelector('.js-hp-promo-central');
    const shadow1 = container.querySelector('.js-hp-promo-shadow-1');
    const shadow2 = container.querySelector('.js-hp-promo-shadow-2');

    const update = () => {
        const currentScroll = window.scrollY;
        const deltaScroll = currentScroll / limitScroll;
        const opacity = Math.max(1 - deltaScroll, 0);

        // Opacity
        gsap.to(container, {
            opacity,
            duration: 0
        });

        // Title
        if (titles) {
            gsap.to(titles, {
                y: currentScroll * -0.25,
                duration: 0
            });
        }

        // Front object
        if (centralObject) {
            gsap.to(centralObject, {
                y: currentScroll * -0.4,
                duration: 0
            });
        }

        // Back objects
        if (shadow1) {
            gsap.to(shadow1, {
                y: currentScroll * -0.2,
                duration: 0
            });
        }

        if (shadow2) {
            gsap.to(shadow2, {
                y: currentScroll * -0.3,
                duration: 0
            });
        }
    };

    update();

    document.addEventListener('scroll', update);
});


// Switch Sun/Earth/Moon
document.querySelectorAll('.js-hp-promo-central').forEach(el => {
    let mode = 'sun';
    const container = document.querySelector('.js-hp-promo-space');
    const hours = +new Date().toLocaleTimeString('ru-RU', {
        timeZone: 'Europe/Moscow',
        hour: '2-digit'
    });

    if (hours >= 18 || hours < 6) {
        mode = 'moon'
    }

    if (hours >= 12 && hours < 18) {
        mode = 'earth'
    }

    container?.classList.remove('_show-sun', '_show-moon', '_show-earth');
    container?.classList.add(`_show-${mode}`);
});
