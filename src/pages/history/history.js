const anchors = document.querySelectorAll('.anchor-block a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const block = document.querySelector(anchor.getAttribute("href"));
        console.log(block);
        console.log(block.offsetTop);
        window.scrollTo({
            top: block.getBoundingClientRect().top - 170,
            left: 0,
            behavior: "smooth",
        });
    });
}

