if (document.querySelector(".glosarii-item")) {
    const anchors = document.querySelectorAll('.glosarii__head a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const block = document.querySelector(anchor.getAttribute("href"));
            window.scrollTo({
                top:
                    block.getBoundingClientRect().top -
                    (window.innerWidth > 1200 ? 170 : 100),
                left: 0,
                behavior: "smooth",
            });
        });
    }

    const observer = new IntersectionObserver(
        (entries) => {
            console.log(entries);
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    anchors.forEach((link) => {
                        let id = link.getAttribute("href").replace("#", "");
                        if (id === entry.target.id) {
                            link.classList.add("_active");
                        } else {
                            link.classList.remove("_active");
                        }
                    });
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    document.querySelectorAll(".glosarii-item").forEach((glosarii) => {
        observer.observe(glosarii);
    });
}

