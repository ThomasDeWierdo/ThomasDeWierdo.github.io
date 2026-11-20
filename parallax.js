window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.dataset.parallaxspeed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
})