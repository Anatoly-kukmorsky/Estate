const elements = {
    selectLinks: document.querySelectorAll(".selectLinks"),
    scroller: document.querySelector(".testimonials__wrapper"),
    itemWidth: document.querySelector(".testimonials__wrapper-item").scrollWidth,
    buttonPrev: document.querySelector("#button-prev"),
    buttonNext: document.querySelector("#button-next"),
};

elements.buttonPrev.addEventListener("click", () => {
    elements.scroller.scrollBy({ left: -elements.itemWidth * 2, top: 0, behavior: "smooth" });
});

elements.buttonNext.addEventListener("click", () => {
    elements.scroller.scrollBy({ left: elements.itemWidth * 2, top: 0, behavior: "smooth" });
});

elements.selectLinks.forEach((select) => {
    select.addEventListener("click", () => {
        select.nextElementSibling.classList.toggle("active");
    });
});
