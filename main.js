const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for(const element of toggle) {
    element.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

const links = document.querySelectorAll("nav ul li a");

for(const link of links) {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
}

const swiper = new Swiper(".swiper-container", {
    slidePerView: 1,
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        },
    },
});

const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "32px",
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`
    , { interval: 100 }
);

function changeHeaderWhenScroll() {
    const header = document.querySelector("#header");
    const navHeight = header.offsetHeight;

    if(window.scrollY >= navHeight) return header.classList.add("scroll")
    else return header.classList.remove("scroll");
}

function backToTop() {
    const backToTopButton = document.querySelector(".back-to-top");

    if(window.scrollY >= 500) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}

window.addEventListener("scroll", () => {
    changeHeaderWhenScroll();
    backToTop();
})