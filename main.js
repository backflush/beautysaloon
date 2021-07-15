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

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
    if(window.scrollY >= navHeight) return header.classList.add("scroll")
    else return header.classList.remove("scroll");
})

const swiper = new Swiper(".swiper-container", {
    slidePerView: 1,
    pagination: {
        element: ".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true,
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
    #contact .text, #contact .links`
    , { interval: 100 }
)