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

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {

    if(window.scrollY >= navHeight) return header.classList.add("scroll")
    else return header.classList.remove("scroll");
}

const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {

    if(window.scrollY >= 500) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}

const sections = document.querySelectorAll("main section[id");

function activateMenuCurrentSection() {
    const boundary = window.pageYOffset + (window.innerHeight / 8) * 4;

    for(const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        const boundaryStart = boundary >= sectionTop;
        const boundaryEnd = boundary <= sectionTop + sectionHeight;

        if(boundaryStart && boundaryEnd) {
            document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.add("active");
        } else {
            document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.remove("active");
        }
    }
}

window.addEventListener("scroll", () => {
    changeHeaderWhenScroll();
    backToTop();
    activateMenuCurrentSection();
})