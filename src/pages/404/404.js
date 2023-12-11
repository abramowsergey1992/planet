import { gsap } from "gsap";

if (document.querySelector(".p404")) {
    let ray = document.querySelector(".p404__ray");
    let bg1 = document.querySelector(".p404__bg-1");
    let bg2 = document.querySelector(".p404__bg-2");
    document.querySelector(".p404").addEventListener("mousemove", (e) => {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        gsap.to(bg1, 0.23, {
            rotate: x * -1 * 5,
        });
        gsap.to(bg2, 0.43, {
            rotate: x * -1 * 3,
        });
        gsap.to(ray, 0.5, {
            rotate: x * 10,
        });
    });
}

